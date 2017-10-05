import React, {Component} from 'react'
import './CurrencyList.css';


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

class CurrencyList extends Component {
    state = {
        baseCurrency: 'CHF',
        baseCurrencies: [],
        isFetching: true,
        hasError: false,
        isFetched: false,
        data: {}
    };

    clear = () => {
        this.setState({
            data: {},
            baseCurrency: 'CHF',
            isFetching: true,
            hasError: false,
            isFetched: false
        });
        this.load(this.state.baseCurrency);
    };

    load = (currency) => {
        const apiURL = 'http://api.fixer.io/latest';
        const request = currency ? `${apiURL}?base=${currency}` : apiURL;

        return fetch(request)
            .then(checkStatus)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (currency) {
                    this.setState({data: data, isFetching: false, isFetched: true})
                }
                else {
                    this.setState({
                        data: data,
                        baseCurrencies: Object.keys(data.rates),
                        isFetching: false,
                        isFetched: true
                    })
                }
            }).catch(error => {
                console.log(error);
                this.setState({hasError: true, isFetching: false})
            })
    };

    handleOnChange = (e) => {
        const newCurrency = e.target.value;
        this.setState({baseCurrency: newCurrency});
        this.load(newCurrency);
    };

    componentDidMount() {
        this.load();
    }

    render() {
        const {isFetching, isFetched, hasError, baseCurrency, data, baseCurrencies} = this.state;
        const canShowData = isFetched && !hasError;

        let containsEurBaseCurrency;
        for (let i = 0; i < baseCurrencies.length; i++) {
            if(baseCurrencies[i] === 'EUR') {
                containsEurBaseCurrency = true;
            }
        }

        if(!containsEurBaseCurrency) {
            baseCurrencies[baseCurrencies.length] = 'EUR';
        }


        let ratesArray;
        if (canShowData) {
            let rateKeys = Object.keys(data.rates);
            ratesArray = rateKeys.map(key => <li key={key}>{key} = {data.rates[key]}</li>);
        }

        return (
            <div>
                {isFetching && <p>Fetching data...</p>}
                {hasError && <p>Oops</p>}

                <select value={baseCurrency} onChange={this.handleOnChange}>
                    {baseCurrencies.length > 0 && baseCurrencies.map(key => <option key={key} value={key}>{key}</option>)}
                </select>

                <button type="button" onClick={this.clear}>Clear</button>


                <ul>{ratesArray}</ul>

            </div>
        );
    }
}

export default CurrencyList
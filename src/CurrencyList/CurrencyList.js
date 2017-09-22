import React, {Component} from 'react'

class CurrencyList extends Component {
    state = {
        data: {}
    };

    clear = () => {
        this.setState({
            data: {}
        });
    };

    load = () => {
        let request = 'http://api.fixer.io/latest';
        let inputBase = document.getElementById("inputBase").value;

        if (inputBase) {
            request += '?base=' + inputBase;
        }

        fetch(request)
            .then(response => {
                if (response.status !== 200) {
                    this.setState({data: "error"})
                }
                return response.json();
            })
            .then(data => {
                {
                    if (this.state.data !== "error") {
                        this.setState({data: data})
                    }
                }
            })
    }


    render() {
        const {data} = this.state;
        let list;
        if (data.rates) {
            const rateKeys = Object.keys(data.rates);
            const ratesArray = rateKeys.map(key => key + '=' + data.rates[key]);

            console.log(ratesArray);

            list = ratesArray.map(value => <li key={value}>{value}</li>);
            list = <ul>{list}</ul>
        }
        return (
            <div>
                <button type="button" onClick={this.clear}>Clear</button>
                <br/>
                <button type="button" onClick={this.load}>Load</button>
                <br/><br/>
                <input type="text" id="inputBase"/>
                <button type="button" onClick={this.load}>Select</button>


                <p>{data.base}</p>

                {data === "error" ? <h1>Bad response from api server</h1>: list}

            </div>

        );
    }

    componentDidMount() {
        this.load();
    }

}

export default CurrencyList
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
        const inputBase = document.getElementById("inputBase").value;

        const comboBox = document.getElementById("currencyComboBox");
        if (comboBox) {
            let text = comboBox.options[comboBox.selectedIndex].text;
            comboBox.value = text;
            request += '?base=' + text;
        }

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
        let comboBox;
        if (data.rates) {
            const rateKeys = Object.keys(data.rates);
            const ratesArray = rateKeys.map(key => <li key={key}>{key} = {data.rates[key]}</li>);
            list = <ul>{ratesArray}</ul>;

            comboBox = rateKeys.map(key => <option key={key} value={key}>{key}</option>);
            comboBox = <select id="currencyComboBox">{comboBox}</select>
        }
        return (
            <div>
                <button type="button" onClick={this.clear}>Clear</button>
                <br/>
                <button type="button" onClick={this.load}>Load</button>
                <br/><br/>
                <input type="text" id="inputBase"/>

                {comboBox}

                <button type="button" onClick={this.load}>Select</button>


                <p>{data.base}</p>

                {data === "error" ? <h1>Bad response from api server</h1> : list}

            </div>

        );
    }

    componentDidMount() {
        this.load();
    }

}

export default CurrencyList
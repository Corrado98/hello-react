import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome/Welcome";
import FunctionWelcome from './Welcome/FunctionWelcome'
import CurrencyList from './CurrencyList/CurrencyList'

class App extends Component {

    state = {
        time: new Date()
    };

    tick = () => {
        console.log('tick')
        this.setState({
            time: new Date()
        });

    };

    componentDidMount() {
        setInterval(this.tick, 1000);
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
                <Welcome name="Corrado"/>
                <FunctionWelcome name="FunctionWelcome Corrado"/>
                <CurrencyList />
            </div>
        );
    };

}

export default App;

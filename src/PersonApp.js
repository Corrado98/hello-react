import React, {Component} from 'react';

import PersonForm from "./PersonTable/PersonForm";
import PersonTable from "./PersonTable/PersonTable";

class PersonApp extends Component {

    state = {
        rows: []
    };

    onSubmit = fields => {
        console.log("PersonApp got: ", fields);
        const array = this.state.rows;
        array.push(fields);
        this.setState({
            rows: array
        });
    };

    render() {
        return (
            <div>
                <PersonForm onSubmit={fields => this.onSubmit(fields)}/>
                <PersonTable data={this.state.rows}/>
            </div>
        );
    };

}

export default PersonApp;

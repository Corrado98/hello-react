import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    state = {
        firstName: '',
        name: '',
        age: ''
    };

    handleSubmit = (event)  =>  {
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            name: '',
            age: ''
        });
        event.preventDefault();
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name: <input type="text" value={this.state.firstName} onChange={this.handleInputChange} name="firstName"/></label><br/>
                    <label>Name: <input type="text" value={this.state.name} onChange={this.handleInputChange} name="name"/></label><br/>
                    <label>Age: <input type="text" value={this.state.age} onChange={this.handleInputChange} name="age"/></label><br/>
                    <button type="submit">Submit</button>
                </form>

                <p>{JSON.stringify(this.state)}</p>
            </div>
        )
    }
}

export default PersonForm


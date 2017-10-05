import React, {Component} from 'react'


class PersonTable extends Component {

    render() {

        const tableRows = this.props.data.map((entry, i) => <tr key={i}>
            <td>{entry.firstName}</td>
            <td>{entry.name}</td>
            <td>{entry.age}</td>
        </tr>);
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>{tableRows}</tbody>
                </table>


            </div>
        );
    }
}


export default PersonTable;
import React, {Component} from 'react';


class Contact extends Component {
    render() {
        const {name, Email, Phone} = this.props
        return (
            <div>
                <h4>Lovel</h4>
            <ul>
                <li>{name}</li>
                <li>{Email}</li>
                <li>{Phone}</li>
            </ul>
            </div>
            
        );
    }
}

export default Contact;
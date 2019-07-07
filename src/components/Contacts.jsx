import React, {Component} from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
            contacts: [
                {
                    id: 1,
                    name: "Lovel",
                    email: "abangura9@mail.com",
                    phone: "099"
                },
                {
                    id: 2,
                    name: "Abu",
                    email: "abangura9@mail.com",
                    phone: "077"
                },
                {
                    id: 3,
                    name: "Bakarr",
                    email: "abangura9@mail.com",
                    phone: "088"
                }
            ]
        }
    
    render() {
        const {contacts } = this.state

        return (
            <div>
                {contacts.map(contact =>(
                    <Contact key={contact.id}
                    contact={contact}/>
                ))}
            </div>
        );
    }
}

export default Contacts;
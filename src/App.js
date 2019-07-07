import React, {Component} from 'react';
import Contact from './components/Contact'
import Header from './components/Header'

class App extends Component {

  render() {
    return (
      <div className="App">
         <Header head="Contact Manager"/>
       <Contact name="Lovel" Email="abangura9@gmail.com" Phone="099" />
      </div>
    );
  }
}

export default App;

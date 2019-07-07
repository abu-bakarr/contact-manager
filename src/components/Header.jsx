import React from 'react';
import propTypes from 'prop-types';

const Header = (props) => {

    const {head} = props;
    return(
       <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
           <div className="container">
               <a href="/" className="navbar-brand">{head}</a>
               <div>
                   <ul className="navbar-nav mr-auto">
                       <li className="nar-item">
                           <a href="/" className="nav-link">Home</a>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
    );
}

Header.propTypes ={
    head: propTypes.string.isRequired
}

export default Header;
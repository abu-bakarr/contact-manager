import React from 'react';
import propTypes from 'prop-types';

const Header = (props) => {

    const {head} = props;
    return(
        <div>
            <h1>{head}</h1>
        </div>
    );
}

Header.propTypes ={
    head: propTypes.string.isRequired
}

export default Header;
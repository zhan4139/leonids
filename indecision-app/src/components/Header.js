import React from 'react';

//Stateless functional component (If not need state)
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

//If there is no title props in parent, then default take effects
Header.defaultProps = {
    title: 'some default!'
};

export default Header;


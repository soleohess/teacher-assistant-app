import React from 'react';

function Header(props) {
    return (
        <header className='App-header'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </header>
    );
}
export default Header;
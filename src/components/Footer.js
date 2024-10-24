import React from "react";

function Footer(props) {
    return(
        <footer className="App-header">
            <f1>{props.title}</f1>
            <p>{props.description}</p>
        </footer>
    );
}

export default Footer;
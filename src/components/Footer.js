import React from "react";

function Footer(props) {
    return(
        <footer className="App-footer">
            <p>{props.description}</p>
        </footer>
    );
}

export default Footer;
import React from "react";
import "../images/style.css";

const Header = (props) => {
    return (
        <div className="header" id="head">Chatbot
            <button className="refresh" type="submit" onClick={props.update}>
                <img className="update hover"
                    src="refresh.png"></img>
            </button>
        </div>
    );
};

export default Header;
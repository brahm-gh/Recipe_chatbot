import React from 'react';
import "../styles/style.css";

const Header = (props) => {
    return (
        <div className="header" id="head">FoodWhizz
            <button className="refresh" type="submit" onClick={props.update}>
                <img className="update"
                     src={props.button}></img>
                <img className="update hover"
                     src="reload1.png"></img>
            </button>
        </div>
    );
};

export default Header;
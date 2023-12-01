import React from "react";
import "../styles/style.css";

function addText(text_for_sidebar) {
    const area = document.getElementById("text");
    area.innerText = text_for_sidebar;
}

const Sidebar = (props) => {
    return (
        <div id="sidebar">
            <ul>
                <li>
                    <button className="bar" onClick={() => addText("Welcome to the Recipe Bot WebPage." +
                        "This bot is made to help you have proper recipes for the food you would love to have.")}>
                        Home
                    </button>
                </li>
                <li>
                    <button className="bar" onClick={() => addText('You can reach us here:\n' +
                        'Avanish Singh: avanish.singh@stud.th-deg.de \nBrahim Ghaouthi: brahim.ghauothi@stud.th-deg.de \nRashid Aghayev:rashid.aghayev@stud.th-deg.de \nMamoun Mourad: mamoun.mourad@stud.th-deg.de')}>
                        Contact Us
                    </button>
                </li>
                <button className="bar" id="dark_theme" onClick={props.themeButtonClick}>
                    Dark Mode
                </button>
            </ul>
            <p id="text"> Welcome to the Recipe Bot WebPage.
                This bot is made to help you have proper recipes for the food you would love to have.
            </p>
        </div>
    );
};
export default Sidebar;
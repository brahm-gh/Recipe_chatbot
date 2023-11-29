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
                    <button className="bar" id="home">Home</button>
                </li>
                <li>
                    <button className="bar"
                            onClick={() => addText("Welcome to Recipe Bot WebPage." +
                            "This bot is made to help you have proper recipes for the food you would love to have. Team Members:" +
                            "Avanish Kumar Singh, Brahim Ghaouthi, Rashid Aghayev,Mamoun Mourad")}>About Us</button>
                </li>
                <li>
                    <button className="bar" onClick={() => addText('you can add your emails here:\n' +
                        'Avanish Kumar Singh:avanish.singh@stud.th-deg.de \nMamoun Mourad: \nRashid Aghayev: \nBrahim Ghaouthi: brahim.ghaouthi@stud.th-deg.de')}>Contact
                    </button>
                </li>
                <button className="bar" id="dark_theme" onClick={props.func}>Change Mode</button>
            </ul>
            <p id="text"> Welcome to the Recipe Bot WebPage.
                This bot is made to help you have proper recipes for the food you would love to have.
                Team Members: Avanish Kumar Singh, Brahim Ghaouthi, Rashid Aghayev,Mamoun Mourad
            </p>
        </div>
    );
};

export default Sidebar;
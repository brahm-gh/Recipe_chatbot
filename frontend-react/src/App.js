import React from "react";
import image from "./images/recipe.jpg";
import "/App.css";
import ChatBotRobot from "./Chatbotcomponent";

function App() {
    return (
        <span>
      <div className="App" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
        <header className="App-header">
          <h3> RECIPE EXPERTS. </h3>
          <p> Welcomes you's to the smart assistance by our Sam the Advisor. </p>
        </header>
      </div>
      <ChatBotRobot />
    </span>
    );
}

export default App;

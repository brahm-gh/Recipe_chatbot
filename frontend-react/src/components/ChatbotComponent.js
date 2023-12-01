import React, {useEffect, useState} from 'react';
import "../styles/style.css";
import Header from "./Header";
import InputArea from "./InputSection";
import MessageArea from "./MessageSection";
import Sidebar from "./Sidebar";
import io from 'socket.io-client';

import RightMessage from "./RightMessage";
import LeftMessage from "./LeftMessage";

const socket = io();
const ChatbotComponent = () => {

    const [messages, setMessages] = useState([
    ])

    const [theme, setTheme] = useState('light');
    const [area, setArea] = useState('msg_area');

    const[update, setUpdate] = useState("reload.png");

    const greetingMessage = {
        info: "Hey, Welcome to FoodWhizz, what would you like to have today? Say Hey to start...",
        date: getCurrentTime(),
        type: "left",
        name: "FoodWhizz"
      };
    useEffect(() => {
       
        setMessages([greetingMessage]);
      }, []);

    // Function to handle theme button click
    function handleThemeButtonClick(){

        const head = document.getElementById("head");
        const input = document.getElementById("input");
        const input_area = document.getElementById("input_area");
        const container = document.getElementById("container");
        const body = document.getElementsByTagName("body")[0];
        const bar = document.getElementById("sidebar");
        const labels = document.getElementsByTagName("ul")[0];
        if (theme === 'light'){
            setTheme('dark');
            setUpdate("https://upload.wikimedia.org/wikipedia/commons/3/38/Solid_white_bordered.png");
            setArea('msg_area black');
            head.style.background = '#010507';
            head.style.color = '#fd8d00';
            head.style.borderBottom = '3px solid black';
            input.style.background = '#010507';
            input.style.borderTop = '3px solid black';
            input_area.style.background = 'black';
            input_area.style.color = 'white';
            input_area.classList.toggle("placeholder-white");
            body.style.background = ("recipe1.jpeg");
            container.style.border = '3px solid black';
            container.style.backgroundColor = '#010507';
            bar.style.color = 'black';
            labels.style.color = 'black';
        }
        else {
            setTheme('light');
            setUpdate("reload.png");
            setArea('msg_area');
            head.style.background = '#d0d0d0';
            head.style.color = '#5b5b5b';
            head.style.borderBottom = '3px solid white';
            input.style.background = '#d0d0d0';
            input.style.borderTop = '3px solid white';
            input_area.style.background = 'white';
            input_area.style.color = '#5b5b5b';
            input_area.classList.remove("placeholder-white");
            body.style.background = ("recipe.jpeg");
            container.style.border = '3px solid white';
            container.style.backgroundColor = '#d0d0d0';
            bar.style.color = 'white';
            labels.style.color = 'white';
        }
    };

    // Function to add user and bot messages
    function addMessage(value_info, value_type){
        const newUserMessage = createMessage(value_info, value_type, "User");
        setMessages([...messages, newUserMessage]);
        
        socket.emit('human',value_info)
        socket.on('botmes',(data) =>{
            const newBotMessage = createMessage(data, "left", "Bot");
            setMessages([...messages,newUserMessage,newBotMessage]);
        })
    }

    // Function to get current time 
    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      }

    // Function to create a message object
    function createMessage(value_info, value_type, name){
        let date = new Date();
        let minutes = date.getMinutes().toString();
        if (date.getMinutes() < 10){
            minutes = "0" + minutes.toString();
        }
        return(
            {
                info: value_info,
                date: date.getHours().toString() + ":" + minutes,
                type: value_type,
                name: name
            }
        )

    }

    // Function to update messages 
    function Update(){
        setMessages([greetingMessage])
    }

    return (
        <div>
            <input className="down_button" id="top-box" type="checkbox" hidden></input>
            <label className="down_label" htmlFor="top-box"></label>
            <Sidebar themeButtonClick={handleThemeButtonClick} />
            <div className="main" id="container">
                <Header update={Update} button={update} />
                <MessageArea messages={messages} area={area} />
                <InputArea send_button={addMessage} />
            </div>
            <footer>&copy; Copyright 2024</footer>
        </div>
    );
};

export default ChatbotComponent;
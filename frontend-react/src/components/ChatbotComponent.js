import React, {useEffect, useState} from 'react';
import "../styles/style.css";
import Header from "./Header";
import InputSection from "./InputSection";
import MessageSection from "./MessageSection";
import io from 'socket.io-client';

const socket = io();
const ChatbotComponent = () => {

    const [messages, setMessages] = useState([
    ])

    const greetingMessage = {
        info: "Hey, Welcome to FoodWhizz, What would you like to have today? Say Hey to start...",
        type: "left",
        name: "FoodWhizz"
      };
    
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setMessages([greetingMessage]);
    }, []);


    // Function to add user and bot messages
    function addMessage(value_info, value_type){
        const newUserMessage = createMessage(value_info, value_type, "User");
        setMessages([...messages, newUserMessage]);
        
        socket.emit('Client message',value_info)
        socket.on('bot-message',(data) =>{
            const newBotMessage = createMessage(data, "left", "Bot");
            setMessages([...messages,newUserMessage,newBotMessage]);
        })
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
            <div className="main" id="container">
                <Header update={Update}/>
                <MessageSection messages={messages} area="msg_section" />
                <InputSection send_button={addMessage} />
            </div>
            <footer>&copy; Copyright 2024</footer>
        </div>
    );
};

export default ChatbotComponent;

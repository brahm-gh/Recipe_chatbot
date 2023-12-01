import React from 'react';
import '../styles/style.css';
import Message from "./Message";

const TextMessage = (props) => {
    const { message, side } = props;

    const messageClass = side === 'right' ? 'right_message' : 'left_message';

    return (
        <div className={messageClass}>
            <div className={`icon ${side}`}></div>
            <div className={`msg ${side}`}>
                <Message message={message} />
            </div>
        </div>
    );
};

export default TextMessage;

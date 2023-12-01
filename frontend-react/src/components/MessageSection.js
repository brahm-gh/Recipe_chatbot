import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TextMessage from "./TextMessage";
import '../styles/style.css';

const MessageSection = (props) => {
    const { area, messages } = props;
    const End = useRef(null);

    useEffect(() => {
        if (messages.length > 0) {
            scrollToBottom();
        }
    }, [messages]);

    function scrollToBottom() {
        End.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className={area}>
            {messages.map((mes) => (
                <TextMessage key={mes.id} message={mes} side={mes.type} />
            ))}
            <div ref={End}></div>
        </div>
    );
};

MessageSection.propTypes = {
    area: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.oneOf(['left', 'right']).isRequired,
            // Add other message properties here
        })
    ).isRequired,
};

export default MessageSection;

import React from "react";
import '../images/style.css';

const Message = (props) => {
  return (
    <div className="message">
        <div className="msg_info">
            <div className="mes_header">{props.message.name}</div>
            <div className="mes_time">{props.message.data}</div>
        </div>
        <div className="mes_text">{props.message.info}</div>
    </div>
  );
};

export default Message;
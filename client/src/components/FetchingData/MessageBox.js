import React from 'react';
import './MessageBox.css';

const MessageBox = ({ mobile, message }) => {
  return (
    <div className="message_box">
      <p>
        <span>Mobile: {mobile}</span>
      </p>
      <p>
        <span>Message: {message}</span>
      </p>
    </div>
  );
};

export default MessageBox;

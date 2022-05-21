import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <div className="typing" style={{background: 'rgb(255, 255, 255)', 
  borderTopColor: 'rgb(234, 234, 234)'}}>
     <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      style={{color: 'rgb(150, 155, 166)'}}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <div className="send-icon" onClick={e => sendMessage(e)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#d7d7d7" d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"></path>
      </svg></div></div>
)

export default Input;
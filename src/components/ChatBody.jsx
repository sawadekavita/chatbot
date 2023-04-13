import React from 'react'
import '../App.css';

const ChatBody = ({chat}) => {

return (
  <div  >
    {chat.map((message, i) => {

      return (
        <div 
          key={i}
          className='returnmsg'
        >
          <pre  className='container'>
            <span className='returnmsg1'>{message.message}</span>
          </pre>
        </div>
      );
    })}

  </div>
);
};

export default ChatBody;
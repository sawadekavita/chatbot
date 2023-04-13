

import React from "react";
import { useState } from "react";

const ChatInput = ({ sendMessage}) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div className='chatinput'>
     
      
          <textarea 
          placeholder="ask something"
             onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
            rows={1}
            className="textarea"
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />

          <img
            onClick={handleSubmit}
            src="https://tse2.mm.bing.net/th?id=OIP.39GpjdtFr0S5i0Q2KADJfwHaHn&pid=Api&P=0"
            width={20}
            alt="send-button"
           
          />
      
    
    </div>
  );
};

export default ChatInput;
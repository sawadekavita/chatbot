import { useState } from 'react';
import './App.css';
import ChatBody from './components/ChatBody';
import ChatInput from './components/ChatInput';
import {useMutation} from 'react-query'
import {fetchResponse} from './api'
function App() {
  const [chat,setChat]=useState([])

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
   
onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate()
  };
  return (  

    <div className="App">
    <div className='innerapp'>
     <div className='header'>Chatbot</div>
     <div className='body'>
      <ChatBody  chat={chat} />
     </div >
     <div className='input'>
     <ChatInput  sendMessage={sendMessage} />
     </div>
     </div>
    </div>
  );
}

export default App;


import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

function ChatInput({ channelName, channelId}) {
    const inputRef = useRef(null);
    const sendMessage = (e) => {
        e.preventDefault(); 

        if (channelId ){
            return false;
        }
        collection(db, "channels").doc(channelId).collection("messages").addDoc({
            message: inputRef.current.value,
        })
    };
  return (
    <ChatInputContainer>
        <form>
            <input placeholder={`Message #ROOM`}/>
            <Button hidden type='submit' onClick={sendMessage}>
              SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

 const ChatInputContainer = styled.div`
   border-radius: 20px;

   > form {
    position: relative; 
    display: flex;
    justify-content: center;

   }

  > form > input {
    position: fixed;
    bottom: 30px; 
    width: 60%; 
    border: 1px solid gray; 
    border-radius: 3px; 
    padding: 20px; 
    outline: none;
  }
  > form > button {
    display: none !important;
  }
 `;
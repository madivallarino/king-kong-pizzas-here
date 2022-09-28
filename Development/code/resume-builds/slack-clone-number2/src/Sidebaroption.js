import { collection, addDoc } from "firebase/firestore"; 
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { enterRoom } from "./features/appSlice";
import { db } from './firebase';


function Sidebaroption({Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();


    const addChannel = () => {
      const channelName = prompt('Please enter the channel name');

      if (channelName){
         addDoc(collection(db, "channels"), {
          name: channelName,  
        });
      }
     
    };

    const selectChannel = () => {
        if (id) {
          dispatch(enterRoom({
            roomId: id, 
          }))
        }
    };
  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{padding: 10}}/>}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
     
    </SideBarOptionContainer>
  )
}

export default Sidebaroption

const SideBarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9; 
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px; 
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;

`;

import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import Sidebaroption from './Sidebaroption.js';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from "firebase/firestore";
import { db } from './firebase'

function SideBar() {
  const [channels, loading, error] = useCollection(collection(db, "channels"))

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
            <h2>SLACK CHANNEL HQ</h2>
            <h3>
              <FiberManualRecordIcon />
              Madison Vallarino
            </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
        <Sidebaroption Icon={InsertCommentIcon} title="Threads" />
        <Sidebaroption Icon={InboxIcon} title="Mentions & reactions" />
        <Sidebaroption Icon={DraftsIcon} title="Saved items" />
        <Sidebaroption Icon={BookmarkBorderIcon} title="Channel browser" />
        <Sidebaroption Icon={PeopleAltIcon} title="People & user groups" />
        <Sidebaroption Icon={AppsIcon} title="Apps" />
        <Sidebaroption Icon={FileCopyIcon} title="File browser" />
        <Sidebaroption Icon={ExpandLessIcon} title="Show less" />
      <hr />
        <Sidebaroption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
        <Sidebaroption Icon={AddIcon} addChannelOption title="Add Channel" />
        {channels?.docs.map(doc => (
          <Sidebaroption 
            key={doc.id} 
            id={doc.id} 
            title={doc.data().name} 

          />
        ))}
    </SidebarContainer>
  )
}

export default SideBar

export const SidebarContainer = styled.div`
   background-color: var(--slack-color) ;
   color: white;
   flex: 0.3;
   border-top: 1px solid #49274b; 
   max-width: 260px;
   margin-top: 50px; 

   >hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
   }
`;


export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px; 
    background-color: white;
    border-radius: 999px;
  }
`;

export const SidebarInfo  = styled.div`
  flex: 1;

  > h2{
    font-size: 15px; 
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3{
    display: flex; 
    font-size: 13px; 
    font-weight: 400; 
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px; 
    margin-right: 2px; 
    color: green;
  }
`;
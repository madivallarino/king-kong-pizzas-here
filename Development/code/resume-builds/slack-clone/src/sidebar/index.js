import React from 'react'
import { SidebarContainer, 
        SidebarHeader,
       SidebarInfo } from './sidebar.style.js'
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

function SideBar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
            <h2>PAPA FAM HQ</h2>
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
        <Sidebaroption Icon={AddIcon} title="Add Channel" />
    </SidebarContainer>
  )
}

export default SideBar
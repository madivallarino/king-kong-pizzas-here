import React from 'react'
import { SidebarContainer, 
        SidebarHeader,
       SidebarInfo } from './sidebar.style.js'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
function SideBar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
            <h2>PAPA FAM HQ</h2>
            <h3>
              <FiberManualRecordOutlinedIcon />
              Madison Vallarino
            </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default SideBar
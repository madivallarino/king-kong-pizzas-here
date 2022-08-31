import React from 'react';
import { HeaderContainer,
        HeaderLeft,
        HeaderAvatar,
        HeaderSearch,
        HeaderRight,
       } from './header.style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Header() {
  return (
    <>
    <HeaderContainer>
      <HeaderLeft>
       <HeaderAvatar />
       <AccessTimeIcon />
      </HeaderLeft>

     <HeaderSearch>
       <SearchOutlinedIcon />
       <input placeholder='SEARCH...'/>
     </HeaderSearch>

     <HeaderRight>
       <HelpOutlineOutlinedIcon />
     </HeaderRight>

    </HeaderContainer>
  </>
  )
}

export default Header;
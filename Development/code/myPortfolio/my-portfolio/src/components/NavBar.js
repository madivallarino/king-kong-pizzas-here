import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){


    return(
        <nav className='nav-bar'>
            <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link> <br/>
           <Link to='/portfolio' style={{ textDecoration: 'none' }}><li>Portfolio</li></Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}><li>Contact</li></Link>
        </nav>
    )
}

export default NavBar;
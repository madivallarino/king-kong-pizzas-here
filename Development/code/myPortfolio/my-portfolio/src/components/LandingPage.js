import React from 'react';
import { Link } from 'react-router-dom';
function LandingPage({pic}){


    return (
        <div >
        {/* <img src={pix} className="header-pic" alt="header-pic" /> */}
        <div className="header-img">
          <img src={pic} className="header-pic"alt="head-pic"/>
        </div>
        <div className="description">
        <h1> Hi, I'm Madi.</h1>
        <h2>Software Engineering Student based in NYC.</h2>
        <p>Looking for work in NYC, Seattle, and Nashville. </p>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Work
        </a> */}
        <Link to='/portfolio' style={{ textDecoration: 'none' }}><button className="button">Check Out My Work</button></Link>
        
      </div>
    )
}

export default LandingPage;
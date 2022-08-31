import React from 'react';
import styled from 'styled-components';
import Homepage from './Homepage';
import Header from './header/index.js';
import SideBar from './sidebar/index.js';
import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Router>
      <>
        <Header />
        <AppBody>
          <SideBar />
          <Routes>
            {/* <Route exact path="/" element={<Homepage/>}/> */}
    
        
          </Routes>
        </AppBody>
      </>
      </Router>
    </div>
  );
}

export default App;


export const AppBody = styled.div`
  display:flex;
  height: 100vh;
`;
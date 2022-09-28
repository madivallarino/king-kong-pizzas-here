import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './Sidebar'

function App() {

  return (
    <div className="app">
     <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Chat />}/>
          </Routes>
        </AppBody>
      </>``
    </Router>
    </div>
  );
}

export default App;


export const AppBody = styled.div`
  display:flex;
  height: 100vh;
`;
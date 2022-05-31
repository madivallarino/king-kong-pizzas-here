import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([])
  
  return (
    <div className="App">
    
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://freepngimg.com/thumb/logo/70011-instagram-script-typeface-myfonts-user-logo-font-thumb.png"
          alt="wow"
        />
      </div>
      <h1>HELLO Clever Programmer</h1>


      <Post 
        imageURL="https://www.thesprucepets.com/thmb/bzdiSVEaF7gjQ_GKtKprxKnqOtE=/2124x1195/smart/filters:no_upscale()/GoldenPuppy185743593-56a9c1f23df78cf772aa4a33.jpg"
        username="madivallarino"
        caption="Wow, I'm figuring out my life"
        />
      <Post 
        imageURL="https://www.thesprucepets.com/thmb/bzdiSVEaF7gjQ_GKtKprxKnqOtE=/2124x1195/smart/filters:no_upscale()/GoldenPuppy185743593-56a9c1f23df78cf772aa4a33.jpg"
        username="bbcutie"
        caption="So flipping cute"
      />
      <Post 
        imageURL="https://www.thesprucepets.com/thmb/bzdiSVEaF7gjQ_GKtKprxKnqOtE=/2124x1195/smart/filters:no_upscale()/GoldenPuppy185743593-56a9c1f23df78cf772aa4a33.jpg"
        username="socute"
        caption="toocuteforschool"
      />
   
    </div>
  );
}

export default App;

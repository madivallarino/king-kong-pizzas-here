// import logo from './logo.svg';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import {Switch, Route} from 'react-router-dom'
import pic from './trythis.JPG';
// import pix from './pix.JPG';
import './App.css';

// import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route  exact path='/portfolio'>
          <Portfolio />
          </Route>
          <Route exact path='/contact'>
            <Contact />
            </Route>
      <Route exact path='/'>
      <LandingPage pic={pic}/>
      </Route>

      </Switch>
      {/* <div className="about-me">
        <span>About Me</span>
      <img src={picture} className="about-me-pic" alt="about-me-pic"/>
      <p>Current Student at Flatiron School. Powerful individual worker, a promising team member</p>
      </div> */}
    </div>
  );
}

export default App;

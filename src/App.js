import './App.css';
import Intro from "./Component/Intro/Intro.js"
import Particles from 'react-particles-js';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./Component/Projects/Projects.js";
import Challenges from './Component/Challenges/Challenges.js'
import Footer from "./Component/Footer/Footer.js";

const particlesOptions = {
  "particles": {
    "number": {
        "value": 70
    },
    "size": {
        "value": 2
    }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }

      }
  }
}

class App extends Component{

  render(){
    return(
      <div className='App'>
        <BrowserRouter>
          <Particles
            className='particles'
            params={particlesOptions}
          />
          <Switch>
            <Route path='/' exact component={Intro} />
            <Route path='/projects' component={Projects} />
            <Route path='/challenges' component={Challenges} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  };
}

export default App;

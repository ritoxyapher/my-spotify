import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainBox from "./components/MainBox";
import ContentBox1 from "./components/ContentBox1";
import ContentBox2 from "./components/ContentBox2";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Box from '@mui/material/Box';
import Image from './backgrounds/starRail.png';
import './index.css'


// since these components are what we defined, im assuming we cannot create hooks to provide css styling to them
// because in material ui, these components have a prop called className, which allows us to create a hook and style them ourselves
// but in our implementation, we did not to this.

// the idea is going to be to style each component in their individual js files, and to create the layout here in app with a material ui grid. 


// had to use material ui's box version of css grid instead of their own grid.
// I now created the front end ui grid layout i wanted and can put my individual components inside these styled boxes

// now i can work on each individual component and write logic for each of them.

function App() {

  return (
    <React.Fragment>   

      <div className="main-box">

        <div className="nav-box">
          <Navbar></Navbar>
        </div>
          
        <div className="content-box1">
          <ContentBox1></ContentBox1>
        </div>
          
        <div className="content-box2">
          <ContentBox2></ContentBox2>
        </div>

        <div className="main-screen">
          <div id="main-screen-sub">
            <MainBox></MainBox>
          </div>
        </div>
        
        <div className="player-box">
          <Player></Player>
        </div>

      </div>

    </React.Fragment>
  );
}

export default App;

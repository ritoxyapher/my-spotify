import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap'; // {} means you're importing specific things from specific libaries 
import Search from "./components/Search"
import MainBox from "./components/MainBox";
import ContentBox1 from "./components/ContentBox1";
import ContentBox2 from "./components/ContentBox2";
import Navbar from "./components/Navbar";
import Player from "./components/Player";

import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from './backgrounds/starRail.png';

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
   
      <Box
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: '10vh 40vh 40vh 10vh',
          gap: 1,
          gridTemplateAreas: `"nav ms ms ms ms"
        "ct1 ms ms ms ms"
        "ct2 ms ms ms ms"
        "player player player player player"`,
        }}
      >

        <Box sx={{ gridArea: 'nav', 
        backgroundColor: 'rgb(18,18,18)',
        color: 'white',
        borderRadius: '10px', 
        marginLeft: '7px', 
        marginTop: '7px', 
        }}
        >
          <Navbar></Navbar>
        </Box>

        <Box sx={{ gridArea: 'ct1', 
        backgroundColor: 'rgb(18,18,18)',
        color: 'white',
        borderRadius: '10px', 
        marginLeft: '7px', 
        }}
        >
          <ContentBox1></ContentBox1>
        </Box>

        <Box sx={{ gridArea: 'ct2', 
        backgroundColor: 'rgb(18,18,18)',
        color: 'white',
        borderRadius: '10px', 
        marginLeft: '7px', 
        }}
        >
          <ContentBox2></ContentBox2>
        </Box>

        <Box sx={{ gridArea: 'ms', 
        backgroundColor: 'rgb(33,33,33)',
        color: 'white',
        borderRadius: '10px', 
        marginRight: '7px', 
        marginTop: '7px',  
        }}
        >
          <MainBox>
          </MainBox>
        </Box>
        
        <Box sx={{ gridArea: 'player', 
        backgroundColor: 'Black',
        color: 'white', 
        borderRadius: '10px', 
        marginLeft: '7px', 
        marginRight: '7px', 
        }}
        >
          <Player></Player>
        </Box>

      </Box>
       
    
    </React.Fragment>
  );
}

export default App;

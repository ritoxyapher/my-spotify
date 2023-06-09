import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';

import useStyles from './style';

// How are we going to add custom css to each of these components?
// Each of these components from Material UI are precoded libaries and have their own class props (member)
// --> Material UI Hook Api?

// We can override the root element's CSS by using the makeStyle function to generate a hook which creates a CSS class object
// to which we can pass into a component's className property to override --> I imported this from a seperate js file i created with the hook inside for cleaner code

// material ui components have a prop called className which allows us to create a hook that can be used to style our components. 


function MainBox(){

    //const classes = useStyles(); // call the function that returns an object with our styling in this functions scope

    return(

        <React.Fragment>
            
            <Container maxWidth='false'>
                <Search></Search>
                
            </Container>
            
        </React.Fragment>
    );
}

export default MainBox;
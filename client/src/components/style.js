import { makeStyles } from '@material-ui/core/styles';

// makeStyles passes in a callback function that takes in a theme, and returns an object that contains our styling.
// this can be used to access which member of the object the component needs for styling. 

const useStyles = makeStyles((theme) => ({ // creating a hook for our css styling for our imported components 

    mainbox: {
      backgroundColor: 'RoyalBlue',
    },
  
    contentb1: {
      backgroundColor: 'LightPink',
    },
  
    contentb2: {
      backgroundColor: 'Plum',
    },
  
    navb: {
      backgroundColor: 'MediumPurple',
    },
  
    player: {
      backgroundColor: 'LightGrey',
    },

    border:{
      borderRadius: '10px',
    },

    searchbar:{
      marginBottom: '20px',
      width: '50vh'
    },

  
  }));

  export default useStyles;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';

// for us to use our own colors for icon, we have to import a theme provider and define
// our own colors. then we wrap our icon component inside the theme provider and specify our theme we 
// want inside the color prop

const theme = createTheme({
    palette: {
      neutral: {
        main: '#E8E8E8',
        contrastText: '#fff',
      },
    },
  });

function Navbar(){

    return(

        <React.Fragment>
            
            <Container maxWidth='false'>

                <Stack>
                    <ThemeProvider theme={theme}>
                        <IconButton aria-label="home" color="neutral">
                            <HomeIcon/>
                            <Typography variant="body1">
                                Home
                            </Typography>
                        </IconButton>
                    </ThemeProvider>

                    <ThemeProvider theme={theme}>
                        <IconButton aria-label="search" color="neutral">
                            <SearchIcon/>
                            <Typography variant="body1">
                                Search
                            </Typography>
                        </IconButton>
                    </ThemeProvider>
                </Stack>

            </Container>
            
        </React.Fragment>
    );
}

export default Navbar;
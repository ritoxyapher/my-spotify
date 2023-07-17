import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const theme = createTheme({
    palette: {
      neutral: {
        main: '#E8E8E8',
        contrastText: '#fff',
      },
    },
  });


function ContentBox1(){

    return(

        <React.Fragment>
            
            <Container maxWidth='false'>

                <Stack>
                    <ThemeProvider theme={theme}>
                        <IconButton aria-label='library' color="neutral">
                            <LibraryBooksIcon/>

                            <Typography variant="body1">
                                Your Library
                            </Typography>
                        </IconButton>

                    </ThemeProvider>
                </Stack>
                
            </Container>
            
        </React.Fragment>
    );
}

export default ContentBox1;
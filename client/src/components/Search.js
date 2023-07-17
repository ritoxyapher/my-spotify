import React from "react"; // this lets me write jsx since i dont have typescript installed
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'; // Import these components from react-bootstrap 
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import useStyles from "./style";
import {returnUser} from "./acc_data" // import our function that fetches all user data and puts it in an object

function Search(){

    const styles = useStyles();
    const [searchInput, setSearchInput] = useState(""); // makes a state variable and a function that applies the change
    const [albums, setAlbums] = useState([]); // albums is going to represent the state of what albums we currently have
    const [user, setUser] = useState( // initializes a user object so we can use our function to set it when the page loads
        {newUser: {
            auth_parameters: {},
            access_token: {},
            search_parameters: {},
            client_id: "",
            client_secret: "",
        }
    });

    // I need an access token to make calls to spotify api
    // we can use useEffect to do something after the DOM has rendered

    useEffect(() => {

        async function getNewUser(){

            // returnUser() returns a promise so we unwrap it with await
            const new_user = await returnUser() // i put all the function calls and necessary info fetches in another file so we dont have to rewrite each time
            .then(response => {
                    setUser(user => ({ // you have to manually merge these in react, they will not set automatically
                        ...user, auth_parameters: response.auth_parameters,
                        ...user, access_token: response.access_token,
                        ...user, search_parameters: response.search_parameters,
                        ...user, client_id: response.client_id,
                        ...user, client_secret: response.client_secret,
                    }))

            });
        }

        getNewUser(); // call it so we can set our user state with the response
        

    }, []); // [] this is so it only runs once when we start our react application

    async function search(){

        // Get request using search
        const artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', user.search_parameters)
        .then(response => response.json())
        .then(data => { return data.artists.items[0].id }) // the fetch call returns a json with a block of info, we have to narrow down the info we want


        // with Artist ID grab all albums from that artist
        const returnAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', user.search_parameters)
        .then(response => response.json())
        .then(data => {
            setAlbums(data.items);
        }) // set our album state to the returning array that contains all the albums of that searched artist
    }


    function truncate(albumName){ // this is so our text doesnt overflow from the container 
        
        if(albumName.length > 18){
            var temptext = "";
            for(var i = 0; i < 18; i++){
                temptext += albumName[i];
            }
            temptext += ".."
            albumName = temptext;
        }

        return albumName;
    }


    return(

        <div> {/*Jsx elements need to have one parent element since jsx operates similarly to a function */}
            
            <h1>Search</h1> {/* Functions only return one thing. So we will wrap it and return this to be rendered*/}

            <InputGroup className={styles.searchbar}>
            <Form.Control
                placeholder="What do you want to listen to?"
                aria-label="What do you want to listen to?"
                aria-describedby="basic-addon2"
                
                onChange={event => setSearchInput(event.target.value)} /* As the enter key is pressed, whatever is inputted into the form is going to be set to the searchInput variable*/
                
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={search}>
                    Search
                </Button>

                
            </InputGroup>

            

            <Grid container spacing={2}>

                {albums.map((album) => {

                    return (
                        <Grid item>
                            <Card>

                                <Card 
                                sx={{ 
                                    maxWidth: 200, 
                                    maxHeight: 200,
                                }}>
                                    <CardMedia 
                                    image={album.images[1].url}
                                    component="img"
                                    />
                                </Card>

                                <Typography variant='caption' align='center' component="div">
                                    {truncate(album.name)}
                                </Typography>

                            </Card>
                            
                        </Grid>
                    )
                })}

            </Grid>

           

         
        </div> 

    );
}

export default Search;
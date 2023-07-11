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

const CLIENT_ID = "0c30bcc04e5f4d51a97e88e9a6b8809a";
const CLIENT_SECRET = "9a39673e470e40d1a2b022cbeeadbc4b";



function Search(){

    const [searchInput, setSearchInput] = useState(""); // makes a state variable and a function that applies the change
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]); // albums is going to represent the state of what albums we currently have

    // I need an access token to make calls to spotify api
    // we can use useEffect to do something after the DOM has rendered

    useEffect(() => {

        var authParameters = {
            method: 'POST', // spotify tells us to make a POST to the api
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
            // spotify wants the body to have this information
        }

        fetch('https://accounts.spotify.com/api/token', authParameters) // inputs parameters for our fetch call to be formatted a specific way
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token)) // sets our accessToken variable with our set function and we pass in only the access token from the json

    }, []); // [] this is so it only runs once when we start our react application

    // Search

    async function search(){
        console.log("Search for " + searchInput);

        // Artist ID
        // Get request using search
        var searchParameters = { // same parameters for both fetching artist object and albums
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken // need this to authorize your request to the spotify api
            }
        }

        var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => { return data.artists.items[0].id }) // the fetch call returns a json with a block of info, we have to narrow down the info we want


        // with Artist ID grab all albums from that artist
        var returnAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setAlbums(data.items);
        }) // set our album state to the returning array that contains all the albums of that searched artist


        // Display

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

            <InputGroup className="mb-3">
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

                                <Card sx={{ maxWidth: 200, maxHeight: 200}}>
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
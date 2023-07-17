import React from "react"; // this lets me write jsx since i dont have typescript installed

const CLIENT_ID = "0c30bcc04e5f4d51a97e88e9a6b8809a";
const CLIENT_SECRET = "9a39673e470e40d1a2b022cbeeadbc4b";

// this async function deals with asyncronous calls
// the return call will execute first before the await call is returned, so the return 
// will always be undefined currently. 

// SOLUTION, use a callback function that passes the bearer token after it is ready to the main function we export

let authParameters = {
    method: 'POST', // spotify tells us to make a POST to the api
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    // spotify wants the body to have this information
}

async function getAT(){

    let getAccessToken = fetch('https://accounts.spotify.com/api/token', authParameters) // inputs parameters for our fetch call to be formatted a specific way
    .then(result => result.json())
    .then(data => { return data.access_token; }) // sets our accessToken variable with our set function and we pass in only the access token from the json
    
    return getAccessToken; // returns an unfufilled promise
}

export async function returnUser(){

    let accessToken = await getAT(); // unwraps the unfulfiled promise by pausing the surrounding execution and awaiting the promise
    
    let searchParameters = { // same parameters for both fetching artist object and albums
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken // need this to authorize your request to the spotify api
        }
    }
    
    let user_info = {
        auth_parameters: authParameters,
        access_token: accessToken,
        search_parameters: searchParameters,
        client_id: "0c30bcc04e5f4d51a97e88e9a6b8809a",
        client_secret: "9a39673e470e40d1a2b022cbeeadbc4b",
    }

    return user_info; // this returns a promise..
}



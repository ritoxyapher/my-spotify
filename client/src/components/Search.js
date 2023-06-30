import React from "react"; // this lets me write jsx since i dont have typescript installed
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'; // Import these components from react-bootstrap 


function Search(){

    function Pressed(){
        return console.log("Pressed");
    }
    
    return(

        <div> {/*Jsx elements need to have one parent element since jsx operates similarly to a function */}
            
            <h1>Search</h1> {/* Functions only return one thing. So we will wrap it and return this to be rendered*/}

            <InputGroup className="mb-3">
            <Form.Control
                placeholder="What do you want to listen to?"
                aria-label="What do you want to listen to?"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={Pressed}>
                    Search
                </Button>
            </InputGroup>

        </div> 

    );
}

export default Search;
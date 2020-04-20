'use strict';

const fetch = require('node-fetch');

// The body of the POST request has to contains your name 
// and the number of people you plan to bring
const body = {
    name: "Abed Alrahman",
    numberOfPeople: 4
};
 
fetch('https://reservation100-sandbox.mxapps.io/rest-doc/api/swagger.json', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => console.log(res)) // status 200 successful operation
    .catch(err => console.error('Network Error:', err.message));
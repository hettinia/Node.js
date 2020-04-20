'use strict';

const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },})
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log(json.value.joke);})
    .catch(err => console.error('Network Error:', err.message));
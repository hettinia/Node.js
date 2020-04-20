'use strict';

const fetch = require('node-fetch');
const Base64 = require('js-base64').Base64; // import Base64 module

// encode username and password using Base64 module
const account = Base64.encode('admin:hvgX8KlVEa');

fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
    method: 'GET',
    headers: { 'Authorization': `Basic ${account}` }})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('Network Error:', err.message));
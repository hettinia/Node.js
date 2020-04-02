'use strict';

// import the padLeft function from andrejs-awesome-function.js
const PadLeft= require('./andrejs-awesome-function');

// declare the numbers array 
const numbers = [ "12", "846", "2", "1236" ];

// pad a number to 4 characters
numbers.forEach(number => {
    let res = PadLeft(number, 4, ' ');
    console.log(res);
});
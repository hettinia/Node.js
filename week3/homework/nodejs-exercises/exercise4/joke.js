'use strict';

const Handlebars = require("handlebars");

const subjects = [
    "shark", 
    "popcorn", 
    "poison", 
    "fork", 
    "cherry", 
    "toothbrush", 
    "cannon"
];

const punchlines = [
    "watch movie with", 
    "spread some love", 
    "put on cake", 
    "clean toilets", 
    "go to the moon", 
    "achieve world piece", 
    "help people learn programing"
];

// generate two different indexes for subjects and punchlines
let i = Math.floor(Math.random()*7);
let j = Math.floor(Math.random()*7);

// randomly picks asubject and punchline upon i and j
const data = {
    "subject" : subjects[i],
    "punchline" : punchlines[j]
};

// replace the blanks in phrase with the random subject and punchline using handlebars
const phrase = "{{subject}} is great to {{punchline}}";
const template = Handlebars.compile(phrase);
const result = template(data);

// log the result to the console
console.log(result);


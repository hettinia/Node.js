'use strict';

function padLeft(val, num, str) {
    return '00000'.replace(/0/g, str).slice(0, num - val.length) + val;
}

// export function 
module.exports = padLeft;
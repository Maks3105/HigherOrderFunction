'use strict';

const store = (x) => () => x;


//... my solution

// const store = (x) => {
//     const value = x;

//     return () => value;
// }

module.exports = { store };

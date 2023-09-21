// String Methods(9) in JavaScript

// indexOf('a') - first occurance of character index value
let myName = 'subbu'
console.log(myName.indexOf('u'));

// lastIndex of method returns last occurance of character index value
console.log(myName.lastIndexOf('b'));

// length property
console.log(myName.length);

// slice method
// 1
console.log(myName.slice(0));

// 2
console.log(myName.slice(0, 3));

// 3
console.log(myName.substring(0, 2));

// toUpperCase()
console.log(myName.toUpperCase());

let mySchoolName = 'RBS'
// toLowerCase()
console.log(mySchoolName.toLowerCase());

// concat - combine two strings
console.log(myName.concat(mySchoolName));

// trim - removes white spaces
let whiteSpace = '      helllo '
console.log(whiteSpace.trim());

// split() - convert string to array of characters
console.log(myName.split(''));
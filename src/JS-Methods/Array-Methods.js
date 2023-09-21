// Array Methods(6) in JavaScript

const myPlaces = ['kadapa', 'proddatur', 'bangalore', 'chennai'];

// push() - adds element at the end of the array.
console.log(myPlaces.push('cochin'));
console.log(myPlaces);

// pop() - removes last element from the array.
console.log(myPlaces.pop());
console.log(myPlaces);

// unshift() - add element at the beginning of the array
console.log(myPlaces.unshift('trivandrum'));
console.log(myPlaces);

// shift() - remove first element from the array
console.log(myPlaces.shift());
console.log(myPlaces);

// splice(param1,param2)
console.log(myPlaces.splice(2, 0, 'porumaamilla'));
console.log(myPlaces);

console.log(myPlaces.splice(0, 1));
console.log(myPlaces);

// join() - convert array to string
const myFruit = ['apple', 'banana'];
console.log(myFruit.join(''));
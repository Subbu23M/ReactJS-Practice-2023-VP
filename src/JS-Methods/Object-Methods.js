// Object Methods(6) in JavaScript

const emptyObject = {};
const studentDetails = {
    name: 'subbu',
    age: 26,
};
const result = Object.assign(emptyObject, studentDetails);
console.log(emptyObject);

// Object.keys()
const res1 = Object.keys(studentDetails);
console.log(res1);

// Object.values()
const res2 = Object.values(studentDetails);
console.log(res2);

// Object.entries()
const res3 = Object.entries(studentDetails);
console.log(res3);

// Object.seal()
const place1 = {
    name: 'air',
    place: 'kadapa',
};

const sealObject = Object.seal(place1);
console.log(Object.isSealed(sealObject));

// cannot add new property
// place1['age'] = 24

place1['name'] = 'sai';
console.log(place1);

// Object.freeze()
const place2 = {
    tour: 'yes',
};
Object.freeze(place2);
place2.tour = 'no';
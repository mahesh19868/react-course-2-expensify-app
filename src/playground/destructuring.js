//
// Object Destructuring
//

console.log('destructuring');

// const person = {
//     name: 'Subramaniam',
//     age: 33,
//     location: {
//         city: 'Mumbai',
//         temp: 36
//     }
// };

// // console.log(`${person.name} is ${person.age} years old`);

// // const name = person.name;
// // const age = person.age;

// // console.log(`${name} is ${age} years old`);

// const { name:firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age} years old`);

// // if(person.location.temp && person.location.city){
// //     console.log(`It's ${person.location.temp} degrees celsius in ${person.location.city}`);
// // }


// // const { temp, city } = person.location;
// // if(temp && city){
// //     console.log(`It's ${temp} degrees celsius in ${city}`);
// // }

// const { temp: temperature, city } = person.location;
// if(temperature && city){
//     console.log(`It's ${temperature} degrees celsius in ${city}`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publishername = 'Self-Published'} = book.publisher;
// console.log(publishername);


//
// Array Destructuring
//

const address = ['Srinagar Complex Chembur', 'Mumbai', 'Maharashtra', '400089'];

//const [ street, city, state, pincode] = address;

//If you want specific values from the array

//const [, city, state] = address;

//console.log(`You are in ${city} ${state}.`)

//If you only want to have state from the array


// const [, , state] = address;

// console.log(`You are in ${state}.`)

//To set default value for state

const [, , state = 'Tamil Nadu'] = address;

console.log(`You are in ${state}.`)

// console.log(`You are in ${address[1]} ${address[2]}.`)


const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75']

const [itemDesc, , mediumSizeCost] = item;

console.log(`A medium ${itemDesc} costs ${mediumSizeCost}`);
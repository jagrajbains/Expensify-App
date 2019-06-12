// const Person = {
//     name: 'Arjun',
//     age: 25,
//     location: {
//         city: 'Gurgaon',
//         temp: '48°'
//     }
// }

// const {  name = 'Anonymous' , age , location } = Person;
// const {city,temp : temperature} = Person.location;

// console.log(`${name} is ${age} years old. `);
// console.log(`He lives in ${city} where the temp is ${temperature}.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name : publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['Dalal Street', 'Gurgaon', , '122001'];

const [ , city, state = 'Somewhere in India', ] = address;

console.log(`You are in ${city} ${state}.`);

const items = ['Coffee (Hot)' , 2.00, 2.50, 2.75];

const [coffee, reg, med, lar] = items;

console.log(`A medium ${coffee} is for ${med}.`);
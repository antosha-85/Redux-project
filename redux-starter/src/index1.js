const person = { 
    name: 'John',
    address: {
        country: 'USA',
        city: 'San Francisco'
    }
};

const updated = Object.assign({}, person, { name: 'Roger', age: 35})
const updated1 = {
    ...person, 
    address: {
        ...person.address,
        city: 'New York'

    },
    age: 30}
// const updated1 = {
//     ...person}
updated1.address.city = 'Atlanta'  
console.log(person)
console.log(updated)
console.log(updated1)
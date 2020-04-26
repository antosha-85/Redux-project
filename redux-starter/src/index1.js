const person = { 
    name: 'John',
    address: {
        country: 'USA',
        city: 'San Francisco'
    }
};

const updated = Object.assign({}, person, { name: 'Roger', age: 30})
const updated1 = {
    ...person, 
    address: {
        ...person.address,
        city: 'New York'

    },
    age: 30}
console.log(updated)
console.log(updated1)
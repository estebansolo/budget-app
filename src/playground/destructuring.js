//
// Object Destructuring
//

const person = {
	name: 'Esteban',
	age: 25,
	location: {
		city: 'Armenia',
		temp: 32
	}
};

// Default Value
const { name, lastname = 'Solorzano', age } = person;
console.log(`${name} ${lastname} is ${age}`);

// Change variable name
const { temp: temperature, city: personCity } = person.location;
if (temperature && personCity) {
	console.log(`It's ${temperature} in ${personCity}`);
}

//
// Array Destructuring
//

const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147' ];

const [ street, city, , zip ] = address;
const [ , , state = 'New York' ] = address;

console.log(`You are in ${city} ${state}.`);

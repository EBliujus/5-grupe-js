console.clear()

/* 
OBJECT - duomenu tipas {}
{
    key1:value1,
    key2:value2,
    key3:value3,
    key4:value4,
    key5:value5,
    key6:value,
    ........
} */


/* 
const person1Name = 'Petras';
const person1Age = 99;
const person1isMarried = true;

const person2Name = 'Maryte';
const person2Age = 88;
const person2isMarried = false;

const person1 = ['Petras', true, 99];
const person2 = ['Maryte', 88, false]; */

const empty = {};
console.log(empty);

const person1 = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}
const person2 = {
    name: 'Maryte',
    age: 99,
    isMarried: false,
}
console.log(person1);
console.log(person2);

// Sveiki, mano vardas yra VARDAS ir man XX metu.

const p1Name = person1['name'];
const p1Age = person1['age'];
const petras = `Sveiki, mano vardas  yra ${p1Name} ir man yra ${p1Age} metu.`;
console.log(petras);

const maryte = `Sveiki, mano vardas  yra ${person2['name']} ir man yra ${person2['age']} metu.`;
console.log(maryte);

console.log([]);
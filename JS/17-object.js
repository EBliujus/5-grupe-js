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

const car = {
    brand: 'Volvo',
    model: 'S40',
    color: 'black',
    price: 10000,
    currency: 'LTL',
    'kaip tau sekasi': 'super duper'
    // retu atveju raktazodi galima rasyti kabutese esant daugiau nei vienam zodziui, bet geriau naudoti kaipTauSekasi!!! 
}

const kasManeDomina = 'kaip tau sekasi';
const info = car[kasManeDomina];

console.log(info);

/* console.log(car['brand']);
console.log(car['color']);
console.log(car['price']); */

// const carIntro = `Parduodu ${car['brand']} ${car['model']} (${car['color']}) uz ${car['price']} EUR.`; GALIMA SUPAPRASTINTI SU ${APRASYMAS.PARAMETRAS} 
// !!!!!!!!!!!!BUTINA NAUDOTI BACKTICK'US SAKINIUI!!!!!!!!!!!!!!!!!!!!!!!

const carIntro = `Parduodu ${car.brand} ${car.model} (${car.color}) uz ${car.price} ${car.currency}.`;
console.log(carIntro);
console.log(car['kaip tau sekasi']);
// isidemek sita LOG sandara su lauztiniais skliaustais ir kabutemis, gali kada prireikt


console.clear()


const students = [
    {
        name: 'Petras',
        marks: [2, 4, 6, 8, 10],
    },
    {
        name: 'Maryte',
        marks: [3, 5, 7, 7, 9, 8, 9],
    },
    {
        name: 'Jonas',
        marks: [2, 4, 6,],
    },
]
console.log(students[0]);
console.log(students[0]['name']);
console.log(students[0].marks[2]);

console.log(students[1]);
console.log(students[1].name);


const student1 = students[0];
const student1Name = student1.name;
const student1Marks = student1.marks;

console.log(student1);
console.log(student1Name);
console.log(student1Marks);


const ona = {
    name:'Ona',
    marks: [2, 4],
    favotireColor: 'blue',
    parents: [
        {
            name:'Jonas',
            age: 99,
            phones: [
            123456,
            654321,
            ]
        },
        {
            name:'Maryte',
            age:78,
            phones: [
            987654,
            456789,
            ]
        },
    ]
}

console.log(ona.parents[1].phones[2]);
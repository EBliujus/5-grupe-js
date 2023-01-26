console.clear()
/* 
Ciklai: for, for-of, while, do-while, for,each,
        map, filter, sort, reduce, 
        for-in,.....

*/


const marks = [10, 2, 4, 6, 8];

// FOR

let sumFor = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark
}
    console.log('For vidurkis', sumFor / marks.length);

// fOR OF
let sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark;
}
console.log('FOR-OF vidurkis', sumForOf / marks.length);

// WHILE

let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    sumWhile += marks[iWhile++];
   
}
console.log('WHILE vidurkis', sumWhile / marks.length);

let sumWhile2 = 0;
let iWhile2 = marks.length;
while (iWhile2) {
    sumWhile2 += marks[--iWhile2];
   
}
console.log('WHILE2 vidurkis', sumWhile2 / marks.length);


// DO-WHILE
let sumDoWhile = 0;
let iDoWhile = 0;
do {
    sumDoWhile += marks[iDoWhile++];
} while (iDoWhile < marks.length)

console.log('DO-WHILE vidurkis', sumDoWhile / marks.length);


// FOREACH

let sumForEach = 0;
marks.forEach((mark, i, x) => {
    console.log(mark, i, x);
    sumForEach += mark;

});
console.log('FOREACH vidurkis:',sumForEach / marks.length);
console.log('--------------------------');

// MAP
const doubleMarks = marks.map(mark => mark * 2);
console.log(marks);
console.log(doubleMarks);
console.log('-----------------------');


//  FILTER
const goodMarks = marks.filter(mark => mark >= 6);
console.log(marks);
console.log(goodMarks);
console.log('------------------');


// SORT

const marksAsc = marks.sort();
console.log(marks);
console.log(marksAsc);

const numbers = [12, 13, 32, 54, 76, -999, 21, 1000, 98, 65, 55, 3, 0, -0, -1, -54,];
numbers.sort();
console.log(numbers);

const dic = ['Petras', 'Maryte', 'Jonas', 'Ona'];
dic.sort();
console.log(dic);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);


const students = [
    {
        name: 'Petras',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 87,
    },
    {
        name: 'Jonas',
        age: 54,
    },
    {
        name: 'Ona',
        age: 69,
    },
]

students.sort();
console.log(students);

students.sort((a, b) => a.age - b.age);
console.log(students);

const luckyNumbers = [ 6, 13, 666, 9, 999, 8]

luckyNumbers.sort((a, b) => a > b ? 1 : a === b ? 0 :-1);
console.log(luckyNumbers);

luckyNumbers.sort((a, b) => a < b ? 1 : a === b ? 0 :-1);
console.log(luckyNumbers);

luckyNumbers.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a ===b) {
        return 0;
    }
});
    console.log(luckyNumbers);


//  REDUCE 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reduceSum = nums.reduce((sum, marks) => sum + marks);
console.log('REDUCE:', reduceSum);
// ATIMINEJANT PRADEDA NUO PIRMO NARIO IR JIS LIEKA TEIGIAMAS, O VISIEMS KITIEMS PRISKIRIA NEIGIAMA REIKSME!!!
const reduceMinus = nums.reduce((sum, marks) => sum - marks);
console.log('REDUCE:', reduceMinus);


const reduceMulti = nums.reduce((sum, marks) => sum * marks);
console.log('REDUCE:', reduceMulti);

const reduceDiv = nums.reduce((sum, marks) => sum / marks);
console.log('REDUCE:', reduceDiv);

const reduceSum2 = nums.reduce((sum, marks) => sum + marks, 100);
console.log('REDUCE:', reduceSum2);

const reduceMinus2 = nums.reduce((sum, marks) => sum - marks, 100);
console.log('REDUCE:', reduceMinus2);

const reduceMulti2 = nums.reduce((sum, marks) => sum * marks, 0);
console.log('REDUCE:', reduceMulti2);
console.log('--------------------------');



const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}
/* console.log(person.name);
console.log(person.age);
console.log(person.isMarried); */

person.car = 'Volvo';

const keys = Object.keys(person);

delete person.isMarried;

for ( let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(person[key]);
}
console.log('--------------');
for ( const key of keys) {
    console.log(person[key]);
}
console.log('----------------');

for ( const key of Object.keys(person)) {
    console.log(person[key]);
}
console.log('----------------');

// FOR-IN

for (const key in person) {
    console.log(key, '-->', person[key]);
}
console.log('--------------');
for (const key in [11, 12, 13]) {
    console.log(key);
}
const a1 = [11, 12, 13];
const a2 = {
    0: 11,
    1: 12,
    2: 13,
};

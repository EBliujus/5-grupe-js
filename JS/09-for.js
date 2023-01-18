console.clear();

/* 
FOR (ciklas)

for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}

*/


const pazymiai = [6, 9, 2, 9, 10];

let sum = 0;
let indexx = 0;

sum += pazymiai[indexx];
indexx += 1;

sum += pazymiai[indexx];
indexx += 1;

sum += pazymiai[indexx];
indexx += 1;

sum += pazymiai[indexx];
indexx += 1;

sum += pazymiai[indexx];
indexx += 1;

console.log('vidurkis:', sum / pazymiai.length);

const marks = [5, 7, 4, 9, 10];

let suma = 0;
let index = 0;

suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];

console.log('Vidurkis:', suma / marks.length);

console.log('---------------------');

// ISSPAUSDINTI  nuo 0 iki 5

for (let i = 0; i <= 5; i++) {
    console.log(i);   
}

// ISSPAUSDINTI  nuo 100 iki 104

for (let k = 100; k <= 104; k++) {
        console.log(k);    
}

// ISSPAUSDINTI  nuo 1000 iki 993

for (let j = 1000; j >= 993; j--) {
    console.log(j);  
}
console.log('----------------');

const grades = [2, 4, 6, 8, 10, 10, 8, 6, 4, 2];

let sudeti = 0;

for (let m = 0; m < grades.length; m++) {
    console.log(m, '-->', grades[m]);
}
console.log('-----------------');

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < numbers.length; i+=1.5) {
    console.log(i, '-->', numbers[i]);
}
console.log('-------');

for (let i = 0; i < numbers.length; i+=2) {
    console.log(i, '-->', numbers[i]);
}
console.log('-------');
for (let i = 1; i < numbers.length; i+=3) {
    console.log(i,'-->', numbers[i]);
}

console.log('---------------------');

const abc = 'abcdefghijklmnopqrstuvwxyz';
let text = '';

for (let i = 0; i < abc.length; i++) {
    console.log(abc[i]);   
}
console.log('------------');
for (let i = 0; i < abc.length; i+=3) {
    text += abc[i];
    console.log(i, abc[i], text);   
}

console.log('----------------------------------');

const students = ['Petras','Maryte','Jonas','Ona'];
//  Sveiki, mano vardas yra [vardas]!

for (let i = 0; i < students.length; i++) {
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log(hi);
}
console.log('----------------------------------');

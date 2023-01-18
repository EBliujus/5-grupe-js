console.clear();

/* 
FOR (ciklas)

for (pradzia; klausimas; pakeitimas) {
    kartojama logikas
}

*/

const marks = [5, 7, 4, 9, 10];

let suma = 0;
let index = 0

suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];

console.log('Vidurkis:', suma / marks.length);
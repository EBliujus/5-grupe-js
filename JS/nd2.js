console.clear();

// Suskaiciuoti sekų sumas: [0 ... 0]


// Sudeti  nuo 0 iki 4
console.log('----Suskaiciuoti seku sumas-----');
const seka = [0, 1, 2, 3, 4];

let suma = 0;
let index = 0;

suma +=seka[index++];
suma +=seka[index++];
suma +=seka[index++];
suma +=seka[index++];
suma +=seka[index++];

console.log('Suma:', suma);
    row00 = 0;
for (let i = 0; i <= 4; i++) {
    row00 += i;
}
console.log('Suma:', row00);

    row0 = 0;
for (let i = 0; i <= 0; i++) {
    row0 += i;
}
console.log('Suma:', row0);

    row1 = 0;
for (let i = 0; i <= 100; i++) {  
    row1 += i; 
}
console.log('Suma:', row1);

    row2 = 0;
for (let i = 574; i <= 815; i++) {
    row2 += i;
}
console.log('Suma:', row2);

    row3 = 0;
for (let i = -50; i <= 50; i++){
    row3 += i;
}
console.log('Suma:',row3);

    row4 = 0;
for (let i = -70; i <= 30; i++) {
    row4 += i;
}
console.log('Suma:',row4);

console.log('----Panaudojant cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo---');

        const word = 'abcdef';
    let text = '';
for (let i = word.length-1; i >= 0; i--) {
    text += word[i];
    console.log (text);
}

const word1 = 'alus';
let text1 = '';
for (let i = word1.length-1; i >= 0; i--) {
text1 += word1[i];
console.log (text1);
}
const word3 = 'omo';
let text3 = '';
for (let i = word3.length-1; i >= 0; i--) {
text3 += word3[i];
console.log (text3);
}
console.log('-Suskaiciuoti, kiek nurodytame intervale yra skaiciu, kurie dalijas be liekanos is 3,5 ir 7 atskirai-');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let liekana3 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (i % 3 ==0){
        liekana3++
    }
}
console.log(liekana3);
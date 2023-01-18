console.clear();

/* 
 */
function sudetis(a, b) {
    return a + b; 
}

const s1 = sudetis(7, 5);
console.log(s1);

const s2 = sudetis(17, -9);
console.log(s2);


function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
        return 'lyginis';
    }
    return 'ne lyginis';

}
const l1 = arLyginis(7)
console.log(`7 yra ${l1}`);

const l2 = arLyginis(88)
console.log(`88 yra ${l2}`);

console.log('-------------------');

const Petras = [10, 2, 4, 6, 8];
const Maryte = [10, 9, 8 , 7];
const Jonas = [2, 5, 7, 9, 10];
const Ona = [5, 4, 6, 7, 10, 2, 9, 10];

function average(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    console.log('pazymiai >>>', marks);
    return sum / marks.length;
}

console.log('Petras', average(Petras), Petras);
console.log('Maryte', average(Maryte), Maryte);
console.log('Jonas', average(Jonas), Jonas);
console.log('Ona', average(Ona), Ona);

console.log('-------------------');

function skirtumas(a, b) {
    // jeigu a yra ne skaicius 
        // grazinti klaida...

    // jeigu b yra ne skaicius
        // grazinti klaida...
    if(typeof a !== 'number') {
        return 'Klaida: pirmas parametras turi buti skaicius'
    }
    if(typeof b !== 'number') {
        return 'Klaida: antras parametras turi buti skaicius'
    }
    return a - b;
}
console.log(skirtumas(7, 5));
console.log(skirtumas(-88, -43));
console.log(skirtumas(-32, 43));
console.log(skirtumas(88, -43));

console.log(skirtumas(true, -43)); 
console.log(skirtumas(-88, false));

console.log(skirtumas('labas', 5));
console.log(skirtumas(19, 'krabas'));
console.clear()

/* 
KINTAMUJU INICIAVIMO BUDAI:
     - const (default/pastovi)
     - let (jei reikes keisti/atnaujinti reiksme)
     - var (niekada nenaudoti)

NUMBERS:
- teigiami/neigiami
- sveikieji/desimtainiai
- normalus/nenormalus skaiciai:
    - begalybe
    - NaN (not-a-number)

ARITMETINIAI OPERATORIAI: +, -, *, /, **(laipsnis), % (liekana)
PRISKIRIMO OPERATORIAI: =, +=, -=, /=, *=, **=, %=
*/

console.log(`-CONST REIKSMES-`);

const metai = 2023;
const PI = 3.1415;

console.log(metai);
console.log(PI);
console.log(metai, PI);

const neigiamas = -5.9;
console.log(neigiamas);

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.log(`-ARITMETINIAI VEIKSMAI-`);

const a = 8;
const b = 3;

const suma = a + b;
console.log(suma);

const skirtumas = a - b;
console.log(skirtumas);

const dalmuo = a / b;
console.log(dalmuo);

const sandauga = a * b;
console.log(sandauga);

const dvejetai = 2 + 2 * 2;
console.log(dvejetai);

const dvejetaiSkliaustuose = (2 + 2) * 2;
console.log(dvejetaiSkliaustuose);

console.log(`-LAIPSNIS/LIEKANA/SKLIAUSTELIAI-`);

const kampas = 90 * 90;
const kampas2 = 90 ** 2;
const kampas3 =  90 ** 3
console.log(kampas, kampas2, kampas3);

const liekana1 = a % b;
console.log(liekana1);

const liekana2 = 3.1415 % 3
console.log(liekana2);

const liekana3 = -65 % 7
console.log(liekana3);

console.log(0.1 + 0.2);

console.log((0.1 + 0.2) / 10);

console.log((1 + 2) / 10);

const f = 0.1;
const g = 0.2;
const h = (f * 10 + g * 10) / 10;
console.log(h);

console.log(`-ARITMETINIAI OPERATORIAI-`);


let pinigine = 0;
console.log(pinigine);

pinigine = pinigine + 1;
console.log(pinigine);

pinigine = pinigine + 2;
console.log(pinigine);

pinigine = pinigine + 3;
console.log(pinigine);

pinigine = pinigine + 5;
console.log(pinigine);

pinigine = pinigine + 8;
console.log(pinigine);

console.log(`-PRISKYRIMO OPERATORIAI-`);

let temperatura = 0;
console.log(temperatura);

temperatura = temperatura + 2;
console.log(temperatura);

temperatura +=5;
console.log(temperatura);

temperatura -= 3;
console.log(temperatura);

temperatura /= 2;
console.log(temperatura);

temperatura **=4;
console.log(temperatura);

temperatura %=3;
console.log(temperatura);

console.log(' plius plius--------------------');

let svoris = 20;
console.log(svoris);

svoris += 1;
console.log(svoris);

svoris++;
console.log(svoris);

console.log(' minus minus--------------------');

let ugis = 100;
console.log(ugis);

ugis = ugis - 1;
console.log(ugis);

ugis -= 1;
console.log(ugis);

ugis--;
console.log(ugis);

--ugis;
console.log(ugis);

console.log('Priekyje---------------');

let gg = 0;

console.log(++gg);
console.log(++gg);
console.log(++gg);
console.log(++gg);
console.log(++gg);
console.log(++gg);

console.log('Gale---------------');

let hh = 0;

console.log(hh++);
console.log(hh++);
console.log(hh++);
console.log(hh++);
console.log(hh++);
console.log(hh++);
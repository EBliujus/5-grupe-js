console.clear()

console.log(13);
console.log(196);
console.log(12345421);

const pradzia = 1991;
console.log(pradzia);

const study = 2022;
console.log(study);

const end = 2023;
console.log(end);

console.log('--------------');

const city = `Vilnius`;
const country = 'Norway';
const place = "BIT";

console.log(city);
console.log(country);
console.log(place);

console.log(`Sauletekis`);
console.log(`Norway`);
console.log(`Vilnius`);

console.log('---------------------');

console.log(2, 4, 8, 16, 32);
console.log(3, 9, 27, 81, 243);
console.log(4, 16, 64, 256, 1024);

const square5 = [5, 25, 125, 625, 3125];
const eleven = [ 123454321, 1234321, 12321, 12321, 121];
const eile = [4, 6, 8, 10, 12];

console.log(square5);
console.log(eleven);
console.log(eile);

console.log(`------------------------`);

const masina = `Ratas, benzinas, dyzelis, vairuotojas, kelias`;
console.log(masina);
const darbas = 'Rytas, pietus, atlyginimas, kolegos, pabaiga';
console.log(darbas);
const klase = "Stalas kėdė projektorius gesintuvas langas";
console.log(klase);

console.log(`--------------------------------------------------`);

const square5_1 = [5, 25, 125, 625, 3125];

const sumaSquare5_1 = square5_1[0] + square5_1[1]+ square5_1[2]+square5_1[3] +square5_1[4];
console.log(sumaSquare5_1);

const ona1 = 34;
const ona2 = 74;
const ona3 =12234;
const ona4 = 999;

const sumaOna = ona1 + ona2 + ona3 + ona4
console.log(sumaOna);

console.log('---------------------');

const vardas = 'Jonas';
const town = 'Klaipeda';
const age = 37;
const jobs = 'sailor';
const bil = 'Lexus';

// Jis yra Tomas, kiles is Klaipedos, dirba sailor. Vairuoja Tomas Lexus automobili, jam yra 37 metai.

const about = `Jis yra ${vardas} , kiles is ${town} , dirba ${jobs} . Vairuoja ${vardas} ${bil} automobili, jam yra ${age} metai.`;
console.log(about);


console.log('----------------------');

const seka = [1, -2, 3, -4, 5, -6, 7, -8, 9]; 

const sumaSeka = seka[0] + seka[1] + seka[2] + seka[3] + seka[4] + seka[5] + seka[6] + seka[7] + seka[8];
console.log(sumaSeka);

console.log('----------------------------------');

const kalba = ['html', 'css','js', 'php', 'python'];

let sakinys_1 = 'Reikia pramokti ir ismokti: ';
let index = 0;

sakinys_1 += kalba[index];
index += 1;
sakinys_1 += `, `;

sakinys_1 += kalba[index];
index += 1;
sakinys_1 += `, `;

sakinys_1 += kalba[index];
index += 1;
sakinys_1 += `, `;

sakinys_1 += kalba[index];
index += 1;
sakinys_1 += `, `;

sakinys_1 += kalba[index];
index += 1;
sakinys_1 += `.`;

console.log(sakinys_1);
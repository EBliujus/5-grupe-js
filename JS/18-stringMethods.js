console.clear()

const abc = 'aasdfghjklpoiuytrezxcvbnm';

console.log(abc.at(2), abc[2]);
console.log(abc.at(-2), abc[abc.length - 2]);
console.log(abc.charAt(2));
console.log(abc.charCodeAt(2));
console.log('------------------');
console.log(abc.indexOf('t'));
console.log(abc.includes('aas'));


console.log('asdf'.repeat(5));
console.log('a'.repeat(5));
console.log('abc'.repeat(5));

let str = '';
for (let i = 0; i < 5; i++) {
    str +='abc';
}
console.log(str);

console.log('Labas rytas'.replace('rytas','vakaras'));

console.log('Lalalalallalalalalalala'.replace('la', 'ma'));
console.log('Lalalalallalalalalalala'.replaceAll('la', 'ma'));
console.log('-------------------');



const abcArray = abc.split('');
console.log(abcArray);

const sakinys = 'Labas rytas sakau tau';
const zodynas = sakinys.split(' ');
console.log(zodynas);

console.log('Labas'.toUpperCase());
console.log('LaBAs'.toUpperCase());
console.log('LaBas'.toLowerCase());

// vardas --> Vardas 
// vARDAS --> Vardas
// Vardas --> Vardas

function formatName(name) {

    return name[0].toUpperCase() + name.slice(1).toLowerCase();
    /* const pirma = name[0];
    const kitos = name.slice(1);

    console.log(pirma, kitos);

    return pirma.toUpperCase() + kitos.toLowerCase(); */
}

console.log(formatName('vardas'), '-->', 'Vardas');
console.log(formatName('Vardas'), '-->', 'Vardas');
console.log(formatName('vARDAS'), '-->', 'Vardas');
console.log(formatName('VARDAS'), '-->', 'Vardas');
console.log('----------------------');

const num = 5;
console.log(num.toString());
console.log('' + num);

console.log((777).toString());
console.log('' + 777);
console.log('----------------');

const gg = '                      Good Game              ';
console.log(gg.trim().length);
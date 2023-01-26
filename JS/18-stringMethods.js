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

console.log('Labas rytas'.replace('rytas','vakaras'));

console.log('Lalalalallalalalalalala'.replace('la', 'ma'));
console.log('Lalalalallalalalalalala'.replaceAll('la', 'ma'));
console.log('-------------------');



const abcArray = abc.split('');
console.log(abcArray);
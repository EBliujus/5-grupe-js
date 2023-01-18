/* 
TYPEOF (tipo nustatymas)
operatorius
*/

console.log(typeof 5);
console.log(typeof Infinity);
console.log(NaN);
console.log(typeof -3.14);

console.log(typeof '');
console.log(typeof 'sdfghgfd');

console.log(typeof true);
console.log(typeof false);

console.log(typeof function () { });

console.log(typeof []);
console.log(typeof [5]);
console.log(typeof ['sdfgfd']);
console.log(typeof [true]);

console.log(typeof undefined);

console.log(typeof null);

console.log('-------------------');

console.log(Array.isArray(5));
console.log(Array.isArray('sdfgh'));
console.log(Array.isArray(true));
console.log(Array.isArray(function () { }));
console.log(Array.isArray(null));
console.log(Array.isArray({}));

console.log(Array.isArray([]));
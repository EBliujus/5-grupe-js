console.clear()
/* 
    OOP <--> class

    new Class() --> sukuria tos Class'es objekta
*/
/* const petras = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favoriteFunction: (a, b) => a + b,
}

const maryte = {
    name: 'Maryte',
    age: 99,
    isMarried: true,
    favoriteFunction: a => a ** 2,
} */

class Person { 
    #age = 0;

    constructor(vardas, amzius, options = {}) {
        this.name = vardas;
        this.#age = amzius;
        this.period = options.laikasPilve || 9;         // kiek laiko buvo pilve || grieztai ?? negrieztai ima reiksmes
        this.teethCount =  options.dantu  || 0;

    }

    sayHi() {
        return `Labas, as vardu ${this.name} (${this.#age})!`;
    }
    printTeethCSentence() {
        return `Labas, as vardu ${this.name} ir turiu ${this.teethCount} dantu!`;
    }
    updateTeeth(count) {
        if (!Number.isInteger(count) || count < 0 || count > 32) {
            return 'Error'
        }
        this.teethCount = count
        return 'OK';
    }
 }

const petras = new Person('Petras', 99, {laikasPilve: 8,});
const maryte = new Person('Maryte', 88, {dantu: 2});
const jonas = new Person('Jonas', 77);
const ona = new Person('Ona', 55, {laikasPilve: 7, dantu: 4});

console.log(petras);
// console.log(petras.age);
// console.log(petras.name);
console.log(maryte);
console.log(jonas);
console.log(ona);
console.log('-----------------------------');
console.log(jonas.sayHi());
console.log(maryte.sayHi());
console.log('-----------------------------');

petras.updateTeeth(2)
console.log(petras.teethCount);
console.log(petras.printTeethCSentence());
console.log(maryte.printTeethCSentence());

console.log(petras.name);
// console.log(petras.age);
// petras.age = 9;
// console.log(petras.age);







console.clear()


class Pet {
    constructor(name, color) {
        this.name = name; 
        this.type = '';
        this.color = color;
        this.gender = true;
        this.sound = 'Miau Au'; 
    }

}
class Dog extends Pet { 
    constructor () {

    }
 }

class Dog {

constructor() {
    this.name = name; 
    this.type = 'dog'
    this.color = color;
    this.gender = true;
    this.sound = 'Au Au';
}
}

class Cat {
    constructor() {
    this.name = name; 
    this.type = 'cat'
    this.color = color;
    this.gender = true;
    this.sound = 'Miau Miau';
}
}

const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'mixed');


console.log(rex.voice());
console.log(rainis.voice());

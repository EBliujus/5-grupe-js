console.clear();

/* 
IF (loginis palyginimas)

Palyginimo operatoriai:
- visi:     <, >, ==, !=, >=, <=, ===, !==,
- naudotini: >, <, ===, !==,
-nenaudotini: ==, !=

Loginai operatoriai:
    - && (AND)
    - || (OR)
    - & (AND)
    - | (OR)

Sablonai:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else {}
if () {} else if {} ..... else if () {}
if () {} else if {} ..... else if () {} else {}
*/

if (4>2) {
    console.log('4 yra daugiau uz 2');
} else {
    console.log('nera daugiau');
}
if (4>22) {
    console.log('tiesa');
} else {
    console.log('melas');
}
if (7 == 7) {
    console.log('lygu');
} else {
    console.log('nelygu');
}
if (7 != 9) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (88>=8) {
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}
if (88<=89) {
    console.log('maziau arba lygu');
} else {
    console.log('daugiau');
}
console.log('-----------------------------');

if (4 == '4') {
    console.log('lygu');
} else {
    console.log('nelygu');
}
if ('f' == 'b') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if (7 === '7' ) {
    console.log('grieztai lygu');
} else {
    console.log('nelygu');
}

console.log('----------------------------------');

const diena = 2;

if (diena === 1){
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('Nera tokios dienos....');
}

console.log('----------------------------');

// CODE NESTING -- nestinimas

const day = 4;

if (day === 1) {
    console.log('Pirmadienis');
} else {
    if (day === 2) {
        console.log('Antradienis');
    } else {
        if (day === 3) {
            console.log('Treciadienis');
        } else {
            if (day === 4) {
                console.log('Ketvirtadienis');
            } else {
                if (day === 5) {
                console.log('Penktadienis');
            } else {
                if (day === 6) {
                    console.log('Sestadienis');
                } else {
                    if (day === 7) {
                        console.log('Sekmadienis');
                    } else {
                        console.log('tokios dienos savaiteje nera....');
                }
                }
                }
            }
        }
    }
}

console.log('------------------------------------')


const nuoKadaSilta = 15;
const temperatura = 3;
const arLyja = false;

if (temperatura < nuoKadaSilta) {
    if (arLyja === true) {
        console.log('Nera silta ir lyja: reikia striukes ir skecio');
    } else {
        console.log('Nera silta ir nelyja: reikia striukes');
    }
} else {
    if (arLyja === true) {
        console.log('Silta ir lyja: varom be maikes');
    } else {
        console.log('Silta ir nelyja: varom su maike');
    }
}

if (temperatura >= nuoKadaSilta && arLyja === false) {
    console.log('Silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja === true) {
    console.log('Silta ir lyja: varom be maikes');
} else if (temperatura < nuoKadaSilta && arLyja === true) {
    console.log('Nera silta ir lyja: reikia striukes ir skecio');
} else {
    console.log('Nera silta ir nelyja: reikia striukes ');
}
// arLyja === false = '!arLyja' reiskia ta pati!!!!
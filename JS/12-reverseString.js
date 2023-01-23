console.clear()

function reverseString(str) {
    if (typeof str !== 'string') {
        return 'ERROR: reikalingas tekstas'
    }
    if (str === '') {
        return 'ERROR: reikalingas ne tuscias tekstas';
    }

    let ats = '';

    // ats = str.split('').reverse().join('')

    // 1 METODAS imti simbolius is galo ir sujungti is eiles
    // for (let i= str.length - 1; i >= 0 ; i--) {
    //     ats += str[i]
    //     console.log(i, str[i], ats);
    // }
 
    // 2 METODAS imti raides is priekio ir deti pries teksta
    // for (let i= 0 ; i < str.length; i++) {
    //     ats = str[i] + ats;
    // }

    // 3 - eiti is priekio, bet raides imti is galo
    for (let i= 0 ; i < str.length; i++) {
        ats += str[str.length - i - 1];
    }


    return ats;

}
console.log(reverseString());
console.log(reverseString(5));
console.log(reverseString(true));
console.log(reverseString(['asdfg']));
console.log(reverseString( ''));

console.log(reverseString());

console.log(reverseString('abc'), '-->', 'cba');
console.log(reverseString('labas'), '-->', 'sabal');
console.log(reverseString('alus'), '-->', 'sula');
console.log(reverseString('x'), '-->', 'x');
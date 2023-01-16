console.clear()
/* 
STRINGS (tekstas)

Iniciavimo tipai: ' (vienguba), " (dviguba)
 */

const vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);

const pilnasVardas = vardas + ' ' +  pavarde
console.log(pilnasVardas);

// Sveiki, as Petras!
const sveiki = 'Sveiki, as ' + vardas + '!';
console.log(sveiki);


// Vienguba (') kabute.
const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

// Dviguba (") kabute.
const kabute2 = 'Dviguba (") kabute.';
console.log(kabute2);

//  Vienguba (') ir dviguba (") kabutes.
const priekis = "Vienguba (') ir ";
const galas = 'dviguba (") kabutes.';
const kabute12_0 = priekis + galas;
console.log(priekis);
console.log(galas);
console.log(kabute12_0);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12_1);

const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute12_2);

const kabute12_3 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabute12_3);

const kabute12_4 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute12_4);

const kabute12_5 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(kabute12_5);

console.log();

const spec = '\\;\$\*\*\\';
console.log(spec);

const spec1 = '\\\\';
console.log(spec1);

console.log(`-\\r\\n\\ nauja eilute-`);

/* 
<header>
    <img src="#">\n\
    <nav></nav>\n\
    </header>\n\
*/
const HTML = '<header>\r\n\
    <img src="#">\r\n\
    <nav></nav>\r\n\
</header>';
console.log(HTML);

console.log(`-SAKINYS SU \\$\\{\\} INTARPAIS -`);

const HTML2 = `<header>
<img src="#">
<nav></nav>
</header>`;
console.log(HTML2);

const name = 'Ona';
const age = 56;
const city = 'Kazlu Ruda';

// 'Sveiki, mano vardas [name/vardas], man yra [age/amzius] metai ir as esu is [city/vietovardis].';

const sms = 'Sveiki, mano vardas ' + name + ', man yra ' + age + ' metai ir as esu is ' + city + '.';
console.log(sms);

const sms2 = `Sveiki, mano vardas ${name}, man yra ${age} metai ir as esu is ${city}.`;
console.log(sms2);

console.clear()


const str2 = 'lalalas';

function daznis(str) {
    const abc = {};
    
    for ( const symbol of str) {
        if (symbol in abc) {
            abc[symbol]++
        }else {
            abc[symbol] = 1;
        }
    }


    let max = 0;
    for(const symbol in abc) {
        if (abc[symbol] > max) {
           max = abc[symbol];
           maxLetter = symbol; 
        }
    }
    const maxSymbols = [];
    for (const symbol in abc) {
        if (abc[symbol] === max) {
        maxSymbols.push(symbol);   
        }
    }


// console.log(abc);
   
return {maxSymbols, max};
}


const text1 = 'vasara';

console.log(daznis('vasara'));

console.log(daznis('cipolinas'));
console.log(daznis('savas'));
console.log(daznis('azerbaidzanas'));
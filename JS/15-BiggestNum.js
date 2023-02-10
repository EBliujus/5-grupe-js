console.clear()

function biggestNum(list) {
    if (!Array.isArray(list) || list.length === 0) {
    return 'ERROR: duok skaiciu sarase';
    }

    let biggest = -Infinity;
    // let biggest = list[0];

    for (let i=0; i < list.length; i++) {
        const num = list[i];
        if (typeof num !== 'number' ||  !isFinite(num)) {
            continue;
        }
        if (num > biggest) {
            biggest = num;
        }
    }

    if (biggest === -Infinity) {
        return 'Error: sarase nerastas nei vienas normalus skaicius';
    }
    
    return biggest;
}




console.log(biggestNum());
console.log(biggestNum(undefined));
console.log(biggestNum(true));
console.log(biggestNum('asddf'));
console.log(biggestNum(null));

console.log(biggestNum([0]), '-->', 0);
console.log(biggestNum([1, 2, 3]), '-->', 3 );
console.log(biggestNum([1, 2, 3, 4, 5]), '-->', 5 );
console.log(biggestNum([4, 3, 5, 7, 0]), '-->', 7 );
console.log(biggestNum([75, 77, 77, 76, 67]), '-->', 77 );
console.log(biggestNum([-1, -2, -3, -4, -5, -7, -9, -10]), '-->', -1 );
console.log(biggestNum([-1000, -2000, -3000, -4000, -5000, -7000, -9000, -10000]), '-->', -1 );
console.log(biggestNum([5, 2, 7, -2, -5]), '-->', 7 );

console.log(biggestNum([5, 7, Infinity,  -2, -5]), '-->', 7 );
console.log(biggestNum([Infinity, 5,  7, -2, -5]), '-->', 7 );
console.log(biggestNum([5,  7, -2, -5, Infinity]), '-->', 7 );

console.log(biggestNum([5, 7, 4,  -2, 'sdfg']), '-->', 7 );
console.log(biggestNum([4, 5,  'sdfg', -2, -5]), '-->', 7 );
console.log(biggestNum(['ssdfg',  7, -2, -5, 4]), '-->', 7 );

console.log(biggestNum([0, 0, true]), '-->', 0);
console.log(biggestNum([0, true, 0]), '-->', 0);
console.log(biggestNum([true, 0, 0]), '-->', 0);

console.log(biggestNum([-1, -1, false]), '-->', 0);
console.log(biggestNum([-1, false, -1]), '-->', 0);
console.log(biggestNum([false, -1, -1]), '-->', 0);

console.log(biggestNum([false, true, null, [], undefined, NaN, 'asdfg']), '-->', 0);


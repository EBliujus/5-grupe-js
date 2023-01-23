console.clear()

function liekana(start, finish, divide) {
    let count = 0;
     
    for (let i = start; i <= finish; i++){
        // console.log(i, i % divide, i % divide === 0);
        if (i % divide === 0) {
            count++
        }
    }
    return count;
}

console.log(liekana(0, 11, 3), '-->', 4);
console.log(liekana(0, 11, 5), '-->', 3);
console.log(liekana(0, 11, 7), '-->', 2);

console.log(liekana(8, 31, 3), '-->', 8);
console.log(liekana(8, 31, 5), '-->', 5);
console.log(liekana(8, 31, 7), '-->', 3);

console.log(liekana(-18, 18, 3), '-->', 13);
console.log(liekana(-18, 18, 5), '-->', 7);
console.log(liekana(-18, 18, 7), '-->', 5);

console.log('-------------------------------');


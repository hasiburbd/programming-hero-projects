// const numbers = [4,99,56,78,24,63]
// const reveresed = numbers.reverse();
// console.log(reveresed)
// console.log(reveresed[2])
// console.log(reveresed.indexOf(56), reveresed.indexOf(99))

// const friends = [ 'abul', 'jamal', 'kamal', 'tamal'];
// const afterReverse = [];
// for(const friend of friends){
//     console.log(friend);
//     afterReverse.unshift(friend);
//     console.log(afterReverse);
// }

let reserveDigits=[];
const digits = [41,25,37,48,57,96]
for(let i=digits.length; i>=0; i--){
    console.log(i, digits[i]);
    console.log(reserveDigits.push(digits[i]))
}
console.log(reserveDigits)
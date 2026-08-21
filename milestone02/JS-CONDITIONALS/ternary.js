/**
 * 
 * 
 * 
 * condition ? if true : if false
 * 
 * 
 */


const age = 20;

// if(age >= 18){
//     console.log('you can vote');
// }
// else{
//     console.log('grow up kids');
// }

// age >=28 ? console.log('you can vote') : console.log('grow up kids');

let price = 600;
const isLeader = false;
if(isLeader){
    price = 0;
}
else{
    price = price + 100;
}

console.log('price is: ' , price );
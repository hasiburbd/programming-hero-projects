const numbers = [12, 25, 36, 86, 94];
const numbers2 = [5, 85, 32]
const players = ['abul', 'babul', 'chabul', 'dabul', 'imbul', 'sdsdf', 'sdfgd']

const check = numbers.includes(3);
// console.log(check);
if(players.includes('daabul')){
    console.log('y')
}

const allNumbers = numbers.concat(numbers2,players)
// console.log(allNumbers)
const numb = [4,5,3,6]
const joined = numb.join('a')
// console.log(joined)
const position = numb.indexOf(30)
console.log(position)
console.log(typeof numb)
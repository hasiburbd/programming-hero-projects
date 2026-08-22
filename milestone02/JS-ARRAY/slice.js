const numbers = [4,99,56,78,24,63];

const need = numbers.slice(1,4);
console.log(need);
console.log(numbers);

const remove = numbers.splice(2,4, 2535, 90545);
console.log(remove);
console.log(numbers);
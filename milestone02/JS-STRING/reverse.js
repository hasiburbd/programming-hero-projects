const commitment = 'I will do this work today.';

// const parts = commitment.split('');
// console.log(parts);
// const reverseParts = parts.reverse();
// console.log(reverseParts);
// const reverseCommitment = reverseParts.join('');
// console.log(reverseCommitment);
let reverseCom = '';
for(const letters of commitment){
    reverseCom = reverseCom + letters;
    console.log(letters, '=>', reverseCom);
}

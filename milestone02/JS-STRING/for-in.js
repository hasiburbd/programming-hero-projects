const student = {
    name : 'Akbar Mogol',
    id : 111,
    age : 23,
    subject : ['bangla', 'english', 'math', 'CSE'] 
}

// for(const title in student){
//     const maan = student[title]; 
//     console.log(title, ':' , maan);
// }

// const title = Object.values(student);
// console.log(title);

for(const key in student){
    // console.log(key. ' = ' .student[key]);
    console.log(key.concat(" ", student[key]));
}




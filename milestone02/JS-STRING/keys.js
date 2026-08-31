const person = {
    name : 'Masum KHanDAKar',
    profession : 'student',
    age : 23,
    isSingle : true,
    'home address' : 'dhaka',
    "parent:name" : 'Rafiqul ali'
}
delete person.isSingle;
delete person['age'];
console.log(person);
const key = Object.keys(person);
console.log(key);

const value = Object.values(person);
console.log(value)
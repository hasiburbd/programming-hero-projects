const person = {
    name : 'Masum KHanDAKar',
    profession : 'student',
    age : 23,
    isSingle : true,
    'home address' : 'dhaka',
    "parent:name" : 'Rafiqul ali'
}

console.log(person['parent:name']);
person["home address"] = 'uk';
console.log(person);
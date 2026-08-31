let contact = {
    name : "Alex Johnson",
    email : "ALEX@GMAIL.COM",
    phone : "555-1234",
}
let newEmail = contact.email.toLocaleLowerCase();
console.log(newEmail);

contact.email = newEmail;
console.log(contact.email);
console.log(contact);

for(let abcAAs in contact){
    console.log(abcAAs + " : " + contact[abcAAs]);
}

contact.favoriteWords = ["hasib", "rakib", "ASIf"];
console.log(contact);


let user = {
    username: "coder123",
    address:{
        city: "Austin",
        zip: "LD12",
    }
}
console.log(user.address.city);
user.address.country = "UK";
console.log(user.address);
delete user.address.zip;
console.log(user);
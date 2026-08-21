const username1 = "admin";
const username2 = "moderator";
const username3 = "clients";
const password1 = 123;
const password2 = 456;
const password3 = 789;

if(username1 === "admin"){
    if(password1 === 123){
        console.log('Admin Dashboard');
    }
    else{
        console.log('Admin Username is Wrong.');
    }
}
else if(username2 === "moderator"){
    if(password2 === 456){
        console.log('Moderator Dashboard');
    }
    else{
        console.log('Moderator Username is Wrong.');
    }
}


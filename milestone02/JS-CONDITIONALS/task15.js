const isLoggedIn = false;
const isAdmin = false;
if(isLoggedIn == true){
    if(isAdmin == true){
        console.log('Admin Dashboard');
    }
    else{
        console.log('User Dashboard');
    }
}
else{
    console.log('Please Loggin');
}
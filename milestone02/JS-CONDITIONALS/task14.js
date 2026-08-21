const age = 12;
const hasId = true;
if(age >= 18){
    if(hasId == true){
        console.log('You can vote cause you are above 18 and you have ID');
    }
    else{
        console.log('you can not vote because you have no ID');
    }
}

else if(hasId == true){
    if(age >= 18){
        console.log('You can vote cause you are above 18 and you have ID');
    }
    else{
        console.log('you can not vote because you are under age');
    }
}
else{
    console.log('you can not vote.you dont have id and you are under aged.')
}
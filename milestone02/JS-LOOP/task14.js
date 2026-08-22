for(i=1; i<=100; i++){
    if(i%5 === 0){
        continue;
    }
    if(i > 46){
        break;
    }
    console.log(i);
}
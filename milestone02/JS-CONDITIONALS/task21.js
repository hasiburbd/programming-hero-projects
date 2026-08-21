const total = 200;
const member = true;
if(total > 1000){
    if(member === true){
        const grantTotal = total - (total*20/100);
        console.log( "Yout Total is(With 20% Discount) : " , grantTotal );
    }
    else{
        const grantTotal = total - (total*10/100);
        console.log( "Yout Total is(With 10% Discount) : " , grantTotal );
    }
}
else{
    console.log('You will not get any discount');
}
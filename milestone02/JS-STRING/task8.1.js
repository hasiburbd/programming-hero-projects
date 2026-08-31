let scores = {math: 90, science : 85, art: 95};
for(const keyAll in scores){
    // console.log(keyAll + ":" + Object.values(scores));
    // console.log(keyAll.concat(":" + scores));
    console.log(keyAll + ":" + scores[keyAll]);
}
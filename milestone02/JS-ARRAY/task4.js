const capitals = ['Dhaka', 'Delhi', 'London']
const changedItem = capitals.splice(1,1);
console.log(changedItem);
console.log(capitals);
capitals.splice(1, 0, 'Banana');
console.log(capitals);

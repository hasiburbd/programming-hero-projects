const college = {
    name : 'VNC',
    location : 'baily road',
    events : ['21 february', 'pohela boishakh', 'EID'],
    student : 500,
    people : {
        count : 200,
        principle: {
            name : 'sabura Maam',
            experience : 30,
            department : 'English',
        }
    }
}
console.log(college['location']);
delete college.location;
console.log(college['location']);

// console.log(college.people);
// console.log(college['people']['principle']['experience']);
college.events[2] = 'Victory Day'
college.people.count = 150;
console.log(college['events']);

console.log(college['people']['count']);
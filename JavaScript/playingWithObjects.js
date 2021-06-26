var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// How would you print/log John's age?
var johnAge = users[1].age
console.log(johnAge);

// How would you print/log the name of the first object?
var firstObjName = users[0].name
console.log(firstObjName)

// How would you print/log the name and age of each user using a for loop?  Your output should look something like this
for(var i of users){
    console.log(i.name + ' - ' + i.age)
}
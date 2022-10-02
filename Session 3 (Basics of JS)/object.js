// Objects

let student = {
    name : "Ian",
    college : "VCC",
    age : 29,
    hobbies : ["Gaming", "Martial Arts", "Voice Acting"],
    address : {
        city : "Surrey",
        province : "BC"
    },
    study : function () {
        console.log("Ian likes to study programming")
    }
}
//Methods inside of console object
// console.log()
// console.error()
// console.table()

// MAPS 
//They are also key value pairs and they are inherited from the object class
//Because when they were made iterable, you can use forEach loop
//The keys inside a map, can also be an object
//In the Maps, the keys are organized

//Map class instance
let map = new Map();

console.log(student.name); // accessing properties by using dot(.) operator 
console.log(student['college']); //VCC

//Difference
var obj = {"abc" : "hello"};
var x = "abc";

obj.x //Undefined
obj[x] // "hello"

//Adding key value pairs in the object
obj.name = "Ian";

//Deleting a key from an object 
console.log(obj); 

delete obj.name;

console.log(obj, "After deleting");

//RUNNING LOOPS ON OBJECTS
//We will be using an interesting loop called For In Loop

for (let key in student) {
    console.log(key); // Keys inside object
    console.log(student.key); // Undefined
    console.log(student[key]); //Values inside those keys
}
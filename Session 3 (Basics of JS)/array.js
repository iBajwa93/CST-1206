let studentList = []; // There is no data inside, which means its an empty array
let students = ["Ian","Dave","Sandra"]; //Array with strings
let list = ["Ian", 30, true] // Array with multiple values

list [0] // "Kevin"
list [10] // Undefined 

list[3] = "David";

console.log(list.length); //4

//********* */Push Method (adds element in the last index of the array)

let fruitsList = ["Apples", "Mangos"];
fruitsList.push("Pineapple", "Orange", "Kiwi");
console.log(fruitsList) //["Apples", "Mangos", "Pineapple", "Orange", "Kiwi"];

//********* */Unshift Method (adds element in the last index of the array)

fruitsList.unshift("Bananas", "Grapes");

console.log(
    fruitsList, "After using unshift"
);

//********* */POP Method (removes element in the last index of the array)

fruitsList.pop();
console.log(fruitsList, "after pop");

//********* */Shift Method (removes element in the first index of the array)

fruitsList.shift();
console.log(fruitsList, "after shift");



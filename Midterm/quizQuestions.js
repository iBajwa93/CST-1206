// const array = [1, 2, 3, 4, 5];
// array[3] = 11;
// console.log(array);

// const { get } = require("http");

// let student = {
//   name: "Emily",
//   email: "emily@gmail.com",
// };
// let studentList = [];
// studentList.push(student);
// (student.name = "Kratos"), studentList.push(student);

// console.log(studentList[0].name);
// console.log(studentList[1].name);

// console.log(true && 4);

// do {
//   console.log("Hey");
// } while (false);

// console.log("Bye");

// let a = 4;
// let b = 4;

// let c = ++a;
// let d = b++;

// console.log(c);
// console.log(d);

// var userName = "Stacy";

// function getUserName() {
//   let userName = "Daniel";

//   if (userName == "Mike") {
//     console.log(userName);
//   } else {
//     let userName = "Danny";
//     console.log(userName);
//   }

//   console.log(userName);
// }

// getUserName();

// const student = {
//   name: "Daniel",
//   email: "email@gmail.com",
//   age: 40,
// };
// for (let key in student) {
//   console.log(student.key);
// }

// let array = [10, 20, -20, 5, 24, 0, 1, 11];

// let filteredArray = array.filter((data) => data);

// console.log(filteredArray);

// var name = "Daniel";
// let obj = {
//   name: "Mike",
//   getName: () => {
//     console.log(this.name);
//   },
// };

// obj.getName();

// var name = "Daniel";

// let obj = {
//   name: "Mike",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// obj.getName();

// var name = "Daniel";

// let obj = {
//   name: "Mike",
//   getName: function () {
//     let name = "Stacy";
//     console.log(this.name);
//   },
// };

// obj.getName();

// let array = [2, 4, 11, 2, 4];

// mostRepeatedArray = array.filter(function (item, index) {
//   return array.indexOf(item) == index;
// });

// console.log(mostRepeatedArray);

// const myArray = [2, 11, -20, 3, 0, -3];

// const myArray = [2, 11, -20, 3, 0, -3];

// function minElement(arr) {
//   const min = arr.reduce((a, b) => Math.min(a, b));
//   console.log(min); // 2
// }

// minElement(myArray);

let myArray = [2, 4, 11, 2, 4];

//must return 11 due to repeating itself once,

function singleElement(array) {
  array.forEach((item, index) => {
  if (item[index] === item[index + 1]) {
    console.log(item);
  }
})

singleElement(myArray)


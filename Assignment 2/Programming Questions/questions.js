//-------------------Question 1

let student = [
  {
    name: "Daniel",
    email: "daniel@gmail.com",
    marks: [80, 60, 50, 70, 95],
  },
  {
    name: "Mark",
    email: "mark@gmail.com",
    marks: [99, 40, 84, 72, 60],
  },
  {
    name: "Stacy",
    email: "stacy@gmail.com",
    marks: [8, 30, 11, 0, 20],
  },
  {
    name: "Geri",
    email: "geri@gmail.com",
    marks: [100, 99, 95, 85, 99],
  },
];

//marksArray is now an object of arrays
// console.log(marksArray);

//object array methods are combined together in a new object of arrays called 'marksArrays'
//this function will then used marksArrays variable as a parameter
function studentWithHighestMarks(objArray) {
  let marksArray = [];

  objArray.forEach(function (item) {
    let marks = item.marks;
    marksArray.push(marks);
  });
  var maxArray = [];

  marksArray.forEach((singleArray) => {
    // console.log(singleArray); // shows the individual single arrays in an object of arrays
    // console.log(maxArray);

    let singleNumber = singleArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0); //0 is an initial value, initial values are needed to begin the sum
    let maxValue = 0;

    if (maxValue >= singleNumber) {
    } else if (maxValue < singleNumber) {
      maxValue = maxValue + singleNumber;
      // console.log(maxValue, "Max value is UPGRADED");
      // array is emptied and then ready to be filled with the current max number array that is being iterated
      maxArray = [];
      maxArray.push.apply(maxArray, singleArray);
      // console.log(maxArray, "array upgraded to its current max");
    }
  });
  objArray.forEach(function (stud) {
    // console.log(stud.marks, "the mark");
    //Check to see which student has the highest marks comparing the maximum calculated array with the array each student object has
    if (JSON.stringify(stud.marks) == JSON.stringify(maxArray)) {
      console.log(stud, "\n^Found the student with the highest marks");
      return stud;
    }
  });
}

studentWithHighestMarks(student);

//-------------------Question 2

function missingNumber(array, n) {
  let total = (n * (n + 1)) / 2;
  let ArraySum = 0;

  for (let i of array) {
    ArraySum += i;
  }

  return total - ArraySum;
}
let numArray1 = [4, 5, 2, 1, 0];

let missedNum1 = missingNumber(numArray1, 5);
console.log(`\nThe missing number of ${numArray1} \nis :`, missedNum1);

let numArray2 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9];

let missedNum2 = missingNumber(numArray2, 10);
console.log(`\nThe missing number of ${numArray2} \nis :`, missedNum2);

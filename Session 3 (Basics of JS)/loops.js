// for loops are used to iterate over strings, arrays (iterable data types)
let array = [1,2,3,4];

for (let i=0; i < array.length ; i++) {
    console.log(i, "indexes");
    console.log(array[i], "values at those index");
}

//While loops

let num = 10;
let counter = 0;
while (counter < num) {
    console.log(counter);
    counter ++;
}

//Do While loop

let count = 10;
let n =10;
do {
    console.log(count);
} while (count < n);

// For Each loop
let arr = [10,20,40,50];
// arr.forEach(() => {

//})

arr.forEach(function(num, index){
    console.log(num); // Similar to num[i]
    console.log(index);
})

// For of Loop

let newArray = [10,20,40,50];

for (let item of newArray) {
    console.log(item);
}
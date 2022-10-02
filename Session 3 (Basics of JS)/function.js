//FIRST WAY ********* function keyword

function sum (a,b) {
    return a+b;
}

//SECOND WAY ********* Arrow functions

const sum1=  (a,b) => {
    return a+b;
}

//Arrow functions 2
const sum2 = (a,b) => a+b;

//Hoisting in functions 
console.log(multiply(3,4)); //12

//Declaration is moved to the top of the scope
function multiply (a,b) {
    return  a*b;
}

//This will give an error, meaning it's 
//not able to access before initialization
console.log(division(4,2));

const division = (a,b) => {
    return a/b;
}

//With arrow functons, we can not do hoisting

//THIRD WAY ********* This is also function expression and it will also not hoist
const divide = function() {
    return 10/5;
}
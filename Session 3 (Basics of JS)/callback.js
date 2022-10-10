function greet() {
    console.log("Hello Ian");
}

// greet(); 

//Callbacks - Call me back whenever you are ready 
// When a function is passed as a paremeter to other function so that can be called later on

function sayHi(callback) {
    callback();
}

sayHi(() => { 
    console.log("Hello Ian");
});
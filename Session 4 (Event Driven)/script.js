// //Option 1 Capture that button element in the script
// const button = document.getElementById("click");
// console.log(button);

// //Option 2 Capture that button element using the tag
// const button = document.getElementsByTagName("button");
// console.log(button);

// //Option 3 
// const button = document.querySelector("#click");
// console.log(button);


//Option 4 Query selector gets the first element which matches the class
const button1 = document.querySelector("#click");
console.log(button1);

//Query selector All gets all the elements which match this class
const buttons = document.querySelectorAll(".btn")
console.log(buttons, "All");

//Event handler and listener for button1
button1.addEventListener("click", function() {
    console.log("Fired");
})

//capture container element
const container = document.querySelector(".container");
console.log(container);

//Event Handler and listener for container element
container.addEventListener("mouseenter", ()=>{
    console.log("Mouse entered");
})

function mouseLeft() {
    console.log("Mouse left");
 
}

container.addEventListener("mouseleave",mouseLeft)

//Go check out multiple types of events to use for JS query
//https://developer.mozilla.org/en-US/docs/Web/Events
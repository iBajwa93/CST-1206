//Var

function sum() {
    var a =10;
    var b //declaration

    console.log(c); //referential error
    if (true) {
        b = 11; // assignment, var can be accessed outside of the curly brackets
        let c = 10; //let can only be accessed within the curly brackets
        const d = 20; // const can only be accessed within the curly bracket
    }

    console.log(b, "value of b");

    // console.log(a); //10
    // console.log(b); //11
    // console.log(c); //Error
    // console.log(d); //Error, referential error
    //c & d are the temporal dead zone
}
sum();

function random() {
    let a = 5;
    const d = 5;
    if (true) {
        let a=10;
        console.log(a);
        if (true){
            console.log(a, "inside");
        }
    }
    console.log(a, "outside");

}

random();
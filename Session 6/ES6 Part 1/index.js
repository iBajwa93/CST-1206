// 'this' keyword refers to the current object that's ----> name

var name = "Daniel";

let obj = {
  name: "Prabh",
  getName: function () {
    console.log(this.name);
  },
};

obj.getName();

//Main difference between arrow functions and the normal 'function' keyword is due to the 'this' keyword

var game = "Fortnite";

let obj2 = {
  game: "Overwatch",
  getGame: () => {
    //By using the arrow function, the reference to 'this' changes to the global 'var' variable (Fortnite)
    //instead of the local variable (Overwatch) inside the object.
    console.log(this.game);
  },
};

obj2.getGame(); //Fortnite

// HOISTING --------------------

//HOISTING in var keywords

console.log(collegeName); //Undefined

var collegeName = "VCC";

//------------The above representation will be written by parser, same as below and that's why it is undefined

var collegeName;

console.log(collegeName); //undefined
collegeName = "VCC";

//HOISTING in 'function' keyword

//------Find Function
let numericArray = [5, 3, 4, 11, 23, 2];

const foundValue = numericArray.find((num) => {
  if (num === 11) {
    return true;
  }
});

console.log(foundValue, "Found Value");

//--------------

const articles = [
  {
    id: Math.random().toFixed(2),
    title: "Latest Vendetta",
    author: "Ian",
    timeRequired: "3 minutes",
    description: "This is an article for the latest revenge strategies",
  },

  {
    id: Math.random().toFixed(2),
    title: "Super Happy Fun Time",
    author: "Bajwa",
    timeRequired: "2 minutes",
    description: "Twas' a gay old time",
  },
];

console.log(findArticle, "FOUND VALUE BY TITLE");

const findArticleByTime = articles.find((item) => {
  if (item.timeRequired === "2 minutes") {
    return true;
  }
});

console.log(findArticleByTime, "FOUND VALUE BY TIME REQUIRED");

//-------------------HOF Find Index function

const index = articles.findIndex((article) => {
  if (article.title === "Life in Vancouver") {
    return true;
  }
});

console.log(index, "index value found!");

//-----------------HOF Splice method
//A splice method can be used to either add elements or delete elements from the array

let numA = [1, 2, 3, 4, 5];

//Array.splice(starting Index, Number of elements you want to delete, items you want to add);

numA.splice(0, 2, 20, 40, 60); //deletes 1 and 2 from the array and adds 20, 40, 60

console.log(numA);

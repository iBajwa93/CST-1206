const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

// let listOfNames = ["Ian", "Bajin", "Rinabi"];

let name = "Lycus";

let email = "lycus.pack@gmail.com";

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

let RequestDate = day + "-" + month + "-" + year;

app.get("/", (req, res) => {
  res.render("index", {
    companyName: name,
    companyEmail: email,
    companyDate: RequestDate,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

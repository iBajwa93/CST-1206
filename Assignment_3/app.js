const express = require("express");
const app = express();
const PORT = 5000;

//path required to serve the CSS file and other files since NodeJS doesn't do it by itself
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

//serves all files in public folder
app.use(express.static(path.join(__dirname, "public")));

let name = "Wolf's Den";

let email = "wolf.den@gmail.com";

var date = new Date();
var utcDate = new Date(date.toUTCString());

//converts UTC to PDT time
utcDate.setHours(utcDate.getHours() - 8);

var pdtDate = new Date(utcDate);

var month = pdtDate.getUTCMonth() + 1; //months from 1-12
var day = pdtDate.getUTCDate();
var year = pdtDate.getUTCFullYear();

let RequestDate = day + "-" + month + "-" + year;

let facebook = "/pictures/facebook.jpg";
let instagram = "/pictures/instagram.jpg";
let twitter = "/pictures/twitter.jpg";
let youtube = "/pictures/youtube.jpg";
let linkedin = "/pictures/linkedin.jpg";

app.get("/", (req, res) => {
  res.render("index", {
    companyName: name,
    companyEmail: email,
    companyDate: RequestDate,
    companyLinks: {
      facebook,
      instagram,
      twitter,
      youtube,
      linkedin,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");

// //next passes control to the next control
// const logger = (req, res, next) => {
//   console.log("I am inside this middleware!");
//   next();
// };

// //app.use is used to implement middlewares
// app.use(logger);

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(__filename, "Directory Name");
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

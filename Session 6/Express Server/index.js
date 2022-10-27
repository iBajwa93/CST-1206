const express = require("express");

const app = express();
const PORT = 4000;
const students = [];

//Telling express that the data I am getting is of type JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the student APIs!");
});

//We are trying to get students data on the server

app.get("/students", (req, res) => {
  //for get requests we get 200 success response
  //   const data = res.status(200);
  //   return data.json(student);
  return res.status(200).json(students);
});

app.post("/students", (req, res) => {
  const studentData = req.body;
  students.push(studentData);

  //201 is used when you are trying to create a resource
  //and send a success response
  return res.status(201).json(students);
});

app.get("/user", (req, res) => {
  res.send("Hello User!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

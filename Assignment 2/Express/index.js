//---------------------Question 3

const express = require("express");
const app = express();
const PORT = 4000;

let employeeList = [
  {
    Name: "Daniel",
    employeeId: 100,
    email: "daniel@gmail.com",
    department: "IT",
  },
  {
    Name: "Ian",
    employeeId: 187,
    email: "Ian@gmail.com",
    department: "HR",
  },
];

//We need the MiddleWare to extract the incoming data as JSON
app.use(express.json());

app.get("/", (req, res) => {
  //redirecting to new routes
  res.redirect("/employees/");
});

//Get endpoint for all employees
app.get("/employees", (req, res) => {
  return res.status(200).json({
    message: "Successfully fetched the employeeList",
    data: employeeList,
  });
});

//POST endpoint for employees with given data
app.post("/employees", (req, res) => {
  const data = req.body;
  //error handling if any of the fields are missing
  if (!data.name || !data.employeeID || !data.email || !data.department) {
    return res.status(500).json({
      message: "One of the parameters is missing",
    });
  }
  employeeList.push(data);

  return res.status(201).json({
    message: "Successfully created the employee",
    data: employeeList,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

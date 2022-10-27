const express = require("express");
const app = express();
const PORT = 5000;

//employees/:department
//employees/id/:employees

let employeeList = [
  {
    id: 1,
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    Salary: 100000,
  },
  {
    id: 2,
    name: "Daniel",
    email: "daniel@company.ca",
    employeeID: 101,
    department: "HR",
    Salary: 50000,
  },

  {
    id: 3,
    name: "Ian",
    email: "Ian@company.ca",
    employeeID: 187,
    department: "IT",
    Salary: 200000,
  },
];

//We need the MiddleWare to extract the incoming data as JSON
app.use(express.json());

app.get("/", (req, res) => {
  //redirecting to new routes
  res.redirect("/employees/");
});
// app.get("/api/v1", (req, res) => {
//   res.send("ENDPOINTS");
// });

//Get endpoint for all employees
app.get("/employees", (req, res) => {
  return res.status(200).json({
    message: "Successfully fetched the employeeList",
    data: employeeList,
  });
});

//Get endpoint for employees with a given ID
app.get("/employees/:postDepartment", (req, res) => {
  let department = req.params.postDepartment;

  const sameDepartment = [];
  employeeList.forEach(function (item) {
    if (item.department == department) {
      sameDepartment.push(item);
      return sameDepartment;
    }
  });

  if (sameDepartment) {
    return res.status(200).json({
      message: "Successfully fetched the employee department",
      data: sameDepartment,
    });
  } else {
    return res.status(404).json({
      message: "department doesn't exist!",
    });
  }
});

app.get("/employees/:postEmployeeID", (req, res) => {
  // const id = Number(req.params.postId);
  // const id = +req.params.postId;

  const employeeID = req.params.postEmployeeID;

  //This fetches the employee with the given id
  const findEmployee = employeeList.find((employee) =>
    employee.employeeID == employeeID ? true : false
  );

  if (findEmployee) {
    return res.status(200).json({
      message: "Successfully fetched the employees",
      data: findEmployee,
    });
  } else {
    return res.status(404).json({
      message: "employee doesn't exist!",
    });
  }
});

//POST endpoint for employees with given data
app.post("/employees", (req, res) => {
  const data = req.body;
  //error handling if any of the fields are missing
  if (
    !data.name ||
    !data.email ||
    !data.employeeID ||
    !data.department ||
    !data.Salary
  ) {
    return res.status(500).json({
      message: "One of the parameters is missing",
    });
  }
  data.id = employeeList.length + 1;
  employeeList.push(data);

  return res.status(201).json({
    message: "Successfully created the employee",
    data: employeeList,
  });
});

//Updating any of the data

app.put("/employees/:employeeID", (req, res) => {
  const employeeID = req.params.employeeID;
  const postToUpdate = req.body;

  if (
    !postToUpdate.name ||
    !postToUpdate.email ||
    !postToUpdate.employeeID ||
    !postToUpdate.department ||
    !postToUpdate.Salary
  ) {
    return res.status(500).json({
      message: "One of the parameters is missing",
    });
  }
  employeeList = employeeList.map((post) => {
    if (post.employeeID == employeeID) {
      post = postToUpdate;
    }
    return post;
  });

  return res.status(200).json({
    message: "Successfully updated the employee",
    data: employeeList,
  });
});

//Deleting a particular Post

app.delete("/employees/:employeeID", (req, res) => {
  const employeeID = req.params.employeeID;

  const index = employeeList.findIndex((employee) => {
    if (employee.employeeID == employeeID) {
      return true;
    }
  });

  if (index != -1) {
    employeeList.splice(index, 1);
    return res.status(200).json({
      message: "Successfully deleted the employee",
      data: employeeList,
    });
  } else {
    return res.status(404).json({
      message: "Element you are trying to delete does not exist!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

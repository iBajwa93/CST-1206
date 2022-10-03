//inner html to add html elements

const table = document.querySelector("#dataEntry");
table.innerHTML = `<tr><th>Name</th><th>Email</th><th>Student ID</th></tr>
<tr>
    <td>Ian</td>
    <td>ian.bajwa@gmail.com</td>

    </tr>

    `;

    // Adding text using Text Content

    const paragraph = document.querySelector("p");
    paragraph.textContent = "Hello this is a paragraph";

    // ***********************

    //Creating elements using Javascript

    const displayTable = document.createElement("table");
// const th = document.createElement("th");

let tableRowLength = 5;
let tableDataLength = 4;
for (let i =0; i < tableRowLength; i++) {
    // console.log("called")
    const tr = document.createElement("tr");

console.log(displayTable);

for (let j=0; j < tableDataLength; j++) {
    const td = document.createElement("td");
    td.textContent = j;
    td.classList.add("border");
    tr.appendChild(td);
    
}

displayTable.appendChild(tr);
}

const displayTableContainer = document.querySelector("#displayTableContainer");
displayTableContainer.appendChild(displayTable);
console.log(displayTable);

function greeting() {
    alert(" Hello Ian");
}

let userlist = [];

function submitForm() {
    let data = {
        name : "",
        email: "",
    }
    
    //Saving new form submit data
    userlist.push(data);
    localStorage.setItem("userlist", JSON.stringify(userlist))
} 

//You can get the userlist using localstorage, JSON.parse helps maintain it's array form rather than a simple string

let updatedUserList = JSON.parse(localStorage.getItem("userlist"));

for (let i=0; i < updatedUserList.length; i++) {

}
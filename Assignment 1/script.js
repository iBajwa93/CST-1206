

let form = document.getElementById("formSubmit");

let table = document.getElementById('tableData');


//submit button function

const submit=()=>{

    //variables that use the entered id values
  let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let id = document.getElementById("id").value;

    //Alert popups if user misses entry, otherwise it will continue to display data
if (name == "")
alert("Enter Name please");
else if (email == "")
alert("Enter Email please");
else if (id == "")
alert("Enter ID please");

else{
    // loops through the array, the attributes are added to li tags as text and then displayed as table data
    
  let newArray = [name,email,id];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode(item);

  //created li tag gets appended with the item text and then added into the data table, this continues until each entered value is finished
  li.appendChild(text);
  table.appendChild(li);
  
  })
//   resets the input boxes after pressing submit button
  form.reset(); 
}
}

//Event runs for submit function
form.addEventListener("submit",(e)=>{
    submit();
  })
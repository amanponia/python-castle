/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function myFunction() {

  alert("in clor");

}


function displayDate() {
  alert("date");
}

// this function custt is ued to save the details of customer (Add)
function save_cust_details() {
  var req = new XMLHttpRequest();          // 1step  - create object of http for sending request
  var customer_name = document.getElementById('cusname').value; // collect data 
  var customer_Add = document.getElementById('cusadd').value;
  var customer_mobile = document.getElementById('cusmobile').value;
  
  url = 'customer?nm=' + customer_name + '&add=' + customer_Add + '&mob=' + customer_mobile;     // url where you send request
  req.onreadystatechange = function () {  // anonymous function

    if (this.readyState == 4 && this.status == 200) {      // inside this content will run response is comes succesfully from server
      alert(req.responseText);                  // if our data save succesfully on server db a pop appear 
    }
  };
  req.open("GET", url, true);     // 2 step statement for sending request
  // xhttp.send("name=aman");   //you can send req+values
  req.send();      // 3step  -FINAL STATEMENT FOR SENDING REQUEST 
  // clear the input fields after saved 
  document.getElementById('cusname').value = "";
  document.getElementById('cusadd').value = "";
  document.getElementById('cusmobile').value = "";
}
// this function custt is ued to show the details of customer (Manage)





function all_customer(){
  var req = new XMLHttpRequest();          // 1step  - create object of http for sending request

  req.onreadystatechange = function(){  // anonymous function

  if (this.readyState == 4 && this.status == 200){      // inside this content will run response is comes succesfully from server
    
    var data = eval(req.responseText);
   // set the properties of a customer table

   var table = document.getElementById("showcusttabel");
   for (i = 1 ; i<data.length ; i++) {
    var row = table.insertRow(i);     // insert a top row 
    var cell0 = row.insertCell(0);        // columa1
    var cell1 = row.insertCell(1);         // columa1
    var cell2 = row.insertCell(2);       // columa1
    var cell3 = row.insertCell(3);  
   
    cell0.innerHTML = i;
    cell1.innerHTML = data[i].custname;
    cell2.innerHTML = data[i].custadd;
    cell3.innerHTML = data[i].custmob;
     
     

   }
  

   
    // var obj = JSON.parse(req.responseText);
  
  }
  };
  req.open("GET","customershow", true);     // 2 step statement for sending request
  // xhttp.send("name=aman");   //you can send req+values
  req.send();      // 3step  -FINAL STATEMENT FOR SENDING REQUEST 
}

  
   
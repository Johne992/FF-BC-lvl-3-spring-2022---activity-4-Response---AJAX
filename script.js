


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =  this.responseText;
    }

  xhttp.open("GET", "server/ajax_info.txt", true);
  xhttp.send();
  }
}
//this line create a function named loadDoc1 that has no parameters
function loadDoc1() {
  //This is used to interact with the server without leaving the page
  var xhttp = new XMLHttpRequest();
  // this line executes a function whenever "readyState" element changes (Vinh)
  xhttp.onreadystatechange = function() {
    //
    if (this.readyState == 4 && this.status == 200) {
      //pulls the demo1 id
      document.getElementById("demo1").innerHTML = this.responseText;
    }

  //
  xhttp.open("GET", "server/ajax_Bio.txt", true);
  //sends request to server
  xhttp.send();
  };
//  function loadDoc() {
//   //This is used to interact with the server without leaving the page
//   var xhttp = new XMLHttpRequest();
//   // this line executes a function whenever "readyState" element changes (Vinh)
//   xhttp.onreadystatechange = function() {
//     //
//     if (this.readyState == 4 && this.status == 200) {
//       //pulls the demo1 id
//       document.getElementById("demo1").innerHTML = this.responseText;
//     }
//   };
//   //
//   xhttp.open("GET", "ajax_info.txt", true);
//   //sends request to server
//   xhttp.send();
//  };
};
//Laura
function loadLaura() {
  //This is used to interact with the server without leaving the page
  var xhttp = new XMLHttpRequest();
  // this line executes a function whenever "readyState" element changes (Vinh)
  xhttp.onreadystatechange = function() {
    //
    if (this.readyState == 4 && this.status == 200) {
      //pulls the demo1 id
      document.getElementById("demo2").innerHTML = this.responseText;
    }
  //
  xhttp.open("GET", "ajax_laura.txt", true);
  //sends request to server
  xhttp.send();
 };


}
  //Justin
  function loadDocJustin(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Justindemo").innerHTML = this.resposeText;{
      }
    };
    xhttp.open("Get", "ajax_justin.txt", true);
    xhttp.send(); 
  }















//Vinh
  function loadDocVinh() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demoVinh").innerHTML =  this.responseText;
    }


  xhttp.open("GET", "server/ajax_vinh.txt", true);
  xhttp.send();
  };
}
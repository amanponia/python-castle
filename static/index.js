function allrt(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         alert("yes its working");
        }
      };
      xhttp.open("GET", "profile", true);
      xhttp.send();
}
var mySheet = document.getElementById("sheet");
var example = document.getElementById("email");
var first = document.getElementById("first");
var last = document.getElementById("last");
var mail = document.getElementById("mail");
var password = document.getElementById("password");


mySheet.onsubmit = () => {

      if(mySheet.firstname.value == "" && mySheet.lastname.value == "" && mySheet.email.value == "" && mySheet.pass.value == ""){

        first.innerText="First name cannot be empty!!!";
        last.innerText="Last name cannot be empty!!!";
        mail.innerText="Looks like this not an email!!!";
        example.setAttribute("placeholder","email@example/com!!!");
        password.innerText="Password cannot be empty!!!";
        return false;       
      }
        

    else if(mySheet.firstname.value == ""){
          
          first.innerText="First name cannot be empty!!!";
          return false;

    }else if(mySheet.lastname.value == ""){
           
        last.innerText="Last name cannot be empty!!!";
        return false;

    }else if(mySheet.email.value == ""){

        mail.innerText="Looks like this not an email!!!";
        example.setAttribute("placeholder","email@example/com");
        return false;

    }else if(mySheet.pass.value == ""){

        password.innerText="Password cannot be empty!!!";
        return false;       
  

    }

    else{
        first.innerText="";
        last.innerText="";
        mail.innerText="";
        password.innerText="";
        return true;
    }




};
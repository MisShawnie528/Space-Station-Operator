// this is the function that will ensure the user is folowing the parameters that I set
function verifyCred() {

    //variable to get the info to the screen
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNum = document.getElementById("badgeNum").value;
    var userInfo = firstName + " " + lastName;
    
    // the user name cannot be more than that 20 letter or less than 7, otherwise error message
    if (userInfo.length  > 20 || userInfo.length < 7) {
     
          document.getElementById("loginStatus").innerHTML = "ERROR!!!    User Name Is Not Correct!";
    } 
    //the badge number need to be above 99 but below 1000   
    else if (badgeNum > 999 || badgeNum < 99) {
        document.getElementById("loginStatus").innerHTML = "ERROR!!!   Badge ID Number Is Invalid!";
    }

    //if all the info was put in correctly then you will see this
    else {
        alert("Access Granted!!!    Welcome to the Space Program" + userInfo + "!");
    }
}    
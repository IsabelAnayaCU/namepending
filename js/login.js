

/*LOGIN TAB JS FORMATTING*/


/*Form validation for login form*/
function validateLogin() {
    var uname = document.forms["login_form"]["user_name"].value; 
    var pword = document.forms["login_form"]["pass_word"].value; 

    /*Check if username and password are empty*/
    if(uname == ""){
        alert("Please enter a valid username"); 
        return false; 
    }

    if(pword == ""){
        alert("Please enter a valid password"); 
        return false; 
    }
}



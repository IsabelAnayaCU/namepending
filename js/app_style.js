
/* APPLICATION PAGES JS */


/*Form validation for login.html*/
function validateLogin() {
    var uname = document.forms["login_validation"]["uname-input"].value; 
    var pword = document.forms["login_validation"]["pword-input"].value; 

    /*Check if username and password are empty*/
    if(username-input == ""){
        alert("please enter a valid username"); 
        return false; 
    }

    if(password-input == ""){
        alert("please enter a valid password"); 
        return false; 
    }
}

/*open create account modal for login.html*/
/*USER INPUT: CLICKS ON CREATE ACCOUNT*/
function openModal() {
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("cpsw");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");    
    var match = document.getElementById("match");


	/*USER INPUT: ANY STRING */
	myInput.onkeyup = function() {
       console.log('userstringinput')
        var lowerCaseLetters = /[a-z]/g; 
        var upperCaseLetters = /[A-Z]/g; 
        var numbers = /[0-9]/g; 
        var minLength = 8; 
        
        // Validate lowercase letters
        if(myInput.value.match(lowerCaseLetters)) {             
            letter.classList.remove("invalid"); 
            letter.classList.add("valid"); 
        } else {
            letter.classList.remove("valid"); 
            letter.classList.add("invalid"); 
        }

        // Validate capital letters        
        if(myInput.value.match(upperCaseLetters)) { 
            capital.classList.remove("invalid"); 
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers        
        if(myInput.value.match(numbers)) { 
            number.classList.remove("invalid"); 
            number.classList.add("valid"); 
        } else {
            number.classList.remove("valid"); 
            number.classList.add("invalid");
        }

        // Validate length
        if(myInput.value.length >= minLength) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }

        // Validate password and confirm password are the same
        if(myInput == confirmMyInput) {
            match.classList.remove("invalid");
            match.classList.add("valid");
        } else {
            match.classList.remove("valid");
            match.classList.add("invalid");
        }

    }


    var result = string1.localeCompare(string2);

    document.getElementById("test").innerHTML = result;


    confirmMyInput.onkeyup = function() {
                // Validate password and confirmPassword
                var passEqualsConfPass = (myInput.value); 
                if(passEqualsConfPass) { 
                    match.classList.remove("invalid"); 
                    match.classList.add("valid"); 
                } else {
                    match.classList.remove("valid"); 
                    match.classList.add("invalid"); 
                }        
                enableButton(letter, capital, number, length, match);
    }
}


function enableButton(letter, capital, number, length, match) {
    var button = document.getElementById('my_submit_button');
    var condition = (enableButton);
    if(condition) {       
            button.disabled = false;
        }        
    }    


function onClickFunction() {
    alert("Hey! I'm all green! Well done.")
}
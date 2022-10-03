// Assignment code here
function generatePassword() {

//Character values for password below  

lower_case= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

upper_case = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

numbers = [0,1,2,3,4,5,6,7,8,9];

special_chars= [ '!', '”', '#', '$', '%', '&',  '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[',  ']', '^', '_', '`', '{', '|', '}', '~'];

//Start with a blank password
passw_choices=""  ;

//Confirmation for Criteria Below

lower_criteria= confirm("Will the password contain lowercase letters ?");

upper_criteria= confirm("Will the password contain uppercase letters ?");

number_criteria= confirm("Will the password contain numbers ?");

special_criteria= confirm("Will the password contain special characters ?");

passw_len= Number(prompt('Enter Password Length. Must be at least 8 characters and no more than 128 characters '))



// Stop the process if any of the below conditions don't evaluate True

// If user did not select any criteria
  if (!lower_criteria && !upper_criteria && !number_criteria && !special_criteria) {

    alert("You must select at least one criteria ! Please restart process :( ");

  }
// If user did not enter password lenght
  else if (!passw_len) {

    alert("Please specify password length! Please restart process :( ");
  }



// If user password lenght is above or below the treshold
  else if (passw_len < 8 || passw_len > 125) {

    alert("Please choose password length between 8 and 128 ! Please restart process :( ");
  
  }


//Run below conditional blocks if user entered the appropiate password length & selected at least 1 criteria


//All 4 Criterias Selected

else if (upper_criteria && lower_criteria && number_criteria && special_criteria) {

  passw_choices= lower_case.concat(upper_case, numbers, special_chars);
  console.log(passw_choices);
}

//At least 3 criteria selected

else if ( lower_criteria && upper_criteria && number_criteria ) {
  passw_choices= lower_case.concat(upper_case, numbers);
  console.log(passw_choices);
  
}

else if ( lower_criteria && upper_criteria && special_criteria ) {
  passw_choices= lower_case.concat(upper_case, special_chars);
  console.log(passw_choices);
  
}

else if ( lower_criteria && special_criteria && number_criteria ) {
  passw_choices= lower_case.concat(special_chars, numbers);
  console.log(passw_choices);
  
}


else if ( upper_criteria && special_criteria && number_criteria ) {
  passw_choices= upper_case.concat(special_chars  , numbers);
  console.log(passw_choices);
  
}


//At least 2 criteria selected

else if (lower_criteria && upper_criteria) {
  passw_choices= lower_case.concat(upper_case);
  console.log(passw_choices);
}


else if (lower_criteria && number_criteria) {
  passw_choices= lower_case.concat(numbers);
  console.log(passw_choices);
}


else if (lower_criteria && special_criteria) {
  passw_choices= lower_case.concat(special_chars);
  console.log(passw_choices);
}

else if (upper_criteria && number_criteria) {
  passw_choices= upper_case.concat(numbers);
  console.log(passw_choices);
}


else if (upper_criteria && special_criteria) {
  passw_choices= upper_case.concat(special_chars);
  console.log(passw_choices);
}


else if (number_criteria && special_criteria) {
  passw_choices= numbers.concat(special_chars);
  console.log(passw_choices);
}


//Only ONE criteria selected

else if (lower_criteria) {
  passw_choices= lower_case  ;
  console.log(passw_choices);
}


else if (upper_criteria) {
  passw_choices= upper_case  ;
  console.log(passw_choices);
}


else if (number_criteria) {
  passw_choices= numbers  ;
  console.log(passw_choices);
}


else if (special_criteria) {
  passw_choices= special_chars  ;
  console.log(passw_choices);
}

;

//Generate Random Password

var password_insert = []


for ( var i =0; i< passw_len; i++ ) {
  var passw_index= Math.floor(Math.random() * passw_choices.length );
  var passw_selection = passw_choices[passw_index];
  password_insert.push(passw_selection);
  console.log(password_insert);
  
  
}

var final_password= password_insert.join("");
console.log(final_password);

return final_password;
 

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

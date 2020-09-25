// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//user prompt options
function generatePassword(){
  var passLen = parseInt(prompt("How many characters would you like your password to contain?"));

  if (isNaN(passLen) === true || passLen < 8 || passLen > 128){
    alert("Invalid input, please enter a Password length between 8 and 128 characters");
    return;
  }
 
  //actual prompts for the user to include the characters they would like to include
  var number = confirm("Would you like to include numeric characters?");

  var upper = confirm("Would you like to include uppercase characters?");

  var lower = confirm("Would you like to include lowercase characters?");

  let special = confirm("Would you like to include Special characters?");
  
  //make sure the user includes atleast one type of characters
  if(
    number === false && 
    upper === false && 
    lower === false && 
    special === false
  ){
    alert("To create a password one type of Character must be chosen");
    return;
  }

  //create variable to collect user input
  var charOptIn = "";

  // Arrays IDk why it was not functioning correctly with ["",""] within the arrays
  var numericChar = ["0123456789"];

  var lowerCase = [
    "abcdefghijklmnopqrstuvwxyz"
  ];

  var upperCase = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  ];

  var specialChar = ["!@#$%^&*()?"];

  if(lower){
    charOptIn += lowerCase;
  }

  if(upper){
    charOptIn += upperCase;
  }

  if(number){
    charOptIn += numericChar;
  }

  if(special){
    charOptIn += specialChar;
  }

  var randomGenerate = "";

  for (var i = 0; i < passLen; i++){
    var random = Math.floor(Math.random() * charOptIn.length) + 1;
    randomGenerate += charOptIn[random];
  }

  return randomGenerate;
}


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
  var charOptIn = [];

  console.log(charOptIn.concat([1, 2]))

  // Arrays
  var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var lowerCase = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"
  ];

  var upperCase = [
    "A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];

  var specialChar = ["!","@","#","$","%","^","&","*","(",")","?"];

  if(lower){
    charOptIn = charOptIn.concat(lowerCase);
  }

  if(upper){
    charOptIn = charOptIn.concat(upperCase);
  }

  if(number){
    charOptIn = charOptIn.concat(numericChar);
  }

  if(special){
    charOptIn = charOptIn.concat(specialChar);
  }

  var randomGenerate = "";

  for (var i = 0; i < passLen; i++){
    var random = Math.floor(Math.random() * charOptIn.length) + 1;
    randomGenerate += charOptIn[random];
    // console.log(charOptIn[random])
    // console.log(randomGenerate);
  }

  return randomGenerate;
}
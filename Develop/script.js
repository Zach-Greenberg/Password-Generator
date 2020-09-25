// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialCharacters = ["!","@","#","$","%","^","&","*","(","(","?"];

// Arrays
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a","b","c","d","e","f","g","h","i","j","k","l",
  "m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

var upperCasedCharacters = [
  "A","B","C","D","E","F","G","H","I","J","K","L",
  "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

//user prompt options
function optIns(){
  var passLen = parseInt(prompt("How many characters would you like your password to contain?"));

  if (isNaN(passLen) === true || passLen < 8 || passLen > 128){
    alert("Invalid input, please enter a Password length between 8 and 128 characters");
    return;
  }

  var numberChar = confirm("Would you like to include numeric characters?");

  var upperCase = confirm("Would you like to include uppercase characters?");

  var lowerCase = confirm("Would you like to include lowercase characters?");

  let specialChar = confirm("Would you like to include Special characters?");

  if(
    numberChar === false && 
    upperCase === false && 
    lowerCase === false && 
    specialChar === false
  ){
    alert("To create a password one type of Character must be chosen");
    return;
  }
}











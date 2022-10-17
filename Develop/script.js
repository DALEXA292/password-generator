// Assignment code here
var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","/","?",".","<",">"];
var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var confirmLenght = "";
var confirmSpecialCharacter;
var confirmNumberCharacter;
var confirmCapitalCharacter;
var confirmLowerCharacter;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password =generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
 
function generatePassword () {

//ask the lenght of password
  var confirmLenght = (prompt("How many characters would you like your password to be?"));

  //If answer is outside of number range
  while(confirmLenght <=7 || confirmLenght >= 128 ) {
    alert("Password's lenght must be between 8-128 characters. Please input a new value");
    var confirmLenght = (prompt("How many characters would you like your password to be?"))
  }

  //Repeat how many characters password will have 
  alert(`Your password will be ${confirmLenght} characters`); 

//parameteres of password
  var confirmSpecialCharacter = confirm("Click OK if you wish to include special characters");
  var confirmNumberCharacter = confirm("Click OK if you wish to include number characters");
  var confirmCapitalCharacter = confirm("Click OK if you wish to include a capital character");
  var confirmLowerCharacter = confirm("Click OK if you wish to include a lowercase character");
// outside of prarameters
while(confirmCapitalCharacter === false && confirmLowerCharacter === false && confirmSpecialCharacter === false && confirmNumberCharacter === false) {
  alert("Please select at least one parameter");
var confirmSpecialCharacter = confirm("Click OK if you wish to include special characters");
var confirmNumberCharacter = confirm("Click OK if you wish to include number characters");
var confirmCapitalCharacter = confirm("Click OK if you wish to include a capital character");
var confirmLowerCharacter = confirm("Click OK if you wish to include a lowercase character");
}

//actions to when prompt is okay

var PasswordContent = []

if (confirmSpecialCharacter) {
  PasswordContent = PasswordContent.concat(specialCharacter)
}

if (confirmNumberCharacter) {
  PasswordContent = PasswordContent.concat(number)
}

if (confirmCapitalCharacter) {
  PasswordContent = PasswordContent.concat(capLetter)
}

if (confirmLowerCharacter) {
  PasswordContent = PasswordContent.concat(lowerLetter)
}

console.log(PasswordContent)

//select random characheters for password

var passwordRandom = ""

for (var i = 0; i < confirmLenght; i++) {
  passwordRandom = passwordRandom + PasswordContent[Math.floor(Math.random() * PasswordContent.length)];
  console.log(passwordRandom)
}
return passwordRandom

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


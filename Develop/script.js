// Assignment code here
var generatePassword = function(){
  var passChar = [];
  var length = window.prompt("How long would you like your password to be? Please select a number between 8 to 128 ");
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numeric = [0,1,2,3,4,5,6,7,8,9];
  const specialChar = ["!", "\"", "#", "$", "%", "&","'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]" ];

  var lowerCasePrompt = window.prompt("Would you like your password to contain lowercase letters? type YES OR NO ");
  var upperCasePrompt = window.prompt("Would you like your password to contain uppercase letters? type YES OR NO ");
  var numericPrompt = window.prompt("Would you like your password to contain numerical numbers? type YES OR NO");
  var specialCharPrompt = window.prompt("Would you like your password to contain special characters? type YES OR NO");

  if (lowerCasePrompt === "YES" || lowerCasePrompt === "yes"){
    for (var i=0 ; i< lowerCase.length; i++){
      passChar.push(lowerCase[i]);
    }
  }
  if (upperCasePrompt === "YES" || upperCasePrompt === "yes"){
    for (var i=0 ; i< upperCase.length; i++){
      passChar.push(upperCase[i]);
    }
  }
  if (numericPrompt === "YES" || numericPrompt === "yes"){
    for (var i=0 ; i< numeric.length; i++){
      passChar.push(numeric[i]);
    }
  }
  if (specialCharPrompt === "YES" || specialCharPrompt === "yes"){
    for (var i=0 ; i< specialChar.length; i++){
      passChar.push(specialChar[i]);
    }
  }
  return passChar;
};

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

// Assignment code here
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var symbol = ["!","@","#","$","%","^","&","*","(",")","{","}","=","<",">","/",","];


function generatePassword() {
  var passwordLength = window.prompt("How many characters will your password contain?");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invaid number entered, please try again.");
    generatePassword();
  }

  else {
  var confirmUpper = confirm("Would you like to include uppercase letters?");
  var confirmLower = confirm("Would you like to include lower case letters?");
  var confirmNumber = confirm("Would you like to include numbers?");
  var confirmSpeacial = confirm("Would you like to include special characters?");
  };

if (confirmUpper && confirmLower && confirmNumber && confirmSpeacial) {
  criteria = [...upper, ...lower, ...number, ...symbol];
}

else if (confirmUpper && confirmLower && confirmNumber && !confirmSpeacial) {
  criteria = [...upper, ...lower, ...number];
}
else if (confirmUpper && confirmLower && !confirmNumber && confirmSpeacial) {
  criteria = [...upper, ...lower, ...symbol];
}
else if (confirmUpper && !confirmLower && confirmNumber && confirmSpeacial) {
  criteria = [...upper, ...number, ...symbol];
}
else if (!confirmUpper && confirmLower && confirmNumber && confirmSpeacial) {
  criteria = [...lower, ...number, ...symbol];
}

else if (confirmUpper && confirmLower && !confirmNumber && !confirmSpeacial) {
  criteria = [...upper, ...lower];
}
else if (confirmUpper && !confirmLower && confirmNumber && !confirmSpeacial) {
  criteria = [...upper, ...number];
}
else if (confirmUpper && !confirmLower && !confirmNumber && confirmSpeacial) {
  criteria = [...upper, ...symbol];
}
else if (!confirmUpper && confirmLower && confirmNumber && !confirmSpeacial) {
  criteria = [...lower, ...number];
}
else if (!confirmUpper && confirmLower && !confirmNumber &&  confirmSpeacial) {
  criteria = [...lower, ...symbol];
}
else if (!confirmUpper && !confirmLower && confirmNumber && confirmSpeacial){
  criteria = [...number, ...symbol];
}

else if (confirmUpper && !confirmLower && !confirmNumber && !confirmSpeacial) {
  criteria = upper;
}
else if (!confirmUpper && confirmLower && !confirmNumber && !confirmSpeacial) {
  criteria = lower;
}
else if (!confirmUpper && !confirmLower && confirmNumber && !confirmSpeacial) {
  criteria = number;
}
else if (!confirmUpper && !confirmLower && !confirmNumber && confirmSpeacial) {
  criteria = symbol;
}
else
  generatePassword();

var password2 =[];

for (let index = 0; index < passwordLength; index++) {
  criteria1 = criteria[Math.floor(Math.random() * criteria.length)];
  password2 += criteria1;
}

return password2;
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

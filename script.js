// Assignment code here

// create variables storing our character information
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseCharacters = upperCaseCharacters.map(element => {
  return element.toLocaleLowerCase();
}); // array to lowerCase found here: https://bobbyhadz.com/blog/javascript-convert-all-elements-of-array-to-lowercase
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', '/', '?', ';', ':', "'", '"', ',', '.', '<', '>'];
var passwordCharacters = [];
// console.log(upperCaseCharacters);
// console.log(lowerCaseCharacters);
// console.log(numericCharacters);
// console.log(specialCharacters);

// start the password function
function generatePassword() {

  // When prompted for length I choose length of password, between 8 and 128 characters
  // Ask password length and validate
  var numberOfCharacters = window.prompt('Please choose a number between 8 and 128 for the length of your password!');
  if (numberOfCharacters < 8 || numberOfCharacters> 128) {
    window.alert('Please chose a valid number of characters between 8 and 128.');
    return generatePassword();

  } else {
    window.alert('Your password will be ' + numberOfCharacters + ' characters long!');
  }

  // ask what characters should be included in in password
  var confirmCharacters = function (){

    var includeLowercase = confirm('Do you want to include lowercase characters?');
    if(includeLowercase) {
     window.alert('Your password will include lowercase characters.');
    } else {
      window.alert('Your password will NOT include lowercase characters.')
      }
    
    var includeUppercase = confirm('Do you want to include uppercase characters?');
    if(includeUppercase) {
      window.alert('Your password will innclude uppercase characters');
    } else {
      window.alert('Your password will NOT include upercase characters.');
    }
    
    var includeSpecialCharacter = confirm('Do you want to include special characters?');
    if(includeSpecialCharacter) {
      window.alert('Your password will include special characters.');
    } else {
      window.alert('Your password will NOT include special characters.');
    }
  
    var includeNumbers = confirm('Do you want to include numbers?');
    if(includeNumbers) {
      window.alert('Your password will include numbers');
    } else {
      window.alert('Your password will NOT include numbers.');
    }
  
    // make sure that at least one option is selected
    debugger;
    if(!includeLowercase && !includeUppercase && !includeSpecialCharacter && !includeNumbers) {
      // console.log('worked')
      window.alert('Please select at least one type of characters for your password!');
      return confirmCharacters();
    }
    // Concatenate selected characters
    if(includeLowercase) {
      passwordCharacters = passwordCharacters.concat(lowerCaseCharacters);
    }
    console.log(passwordCharacters)
    if(includeUppercase) {
      passwordCharacters = passwordCharacters.concat(upperCaseCharacters);
    }
    console.log(passwordCharacters)
    if(includeSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
    console.log(passwordCharacters)
    if(includeNumbers) {
      passwordCharacters = passwordCharacters.concat(numericCharacters);
    }
    console.log(passwordCharacters);
  }
  confirmCharacters(); // not sure where to call this function

  
  debugger;
  //select random characters out of selected character options
  var finalPassword = '';
  for(var i = 0; i < numberOfCharacters; i++) {
    var indx = Math.floor(Math.random() * passwordCharacters.length);
    finalPassword += passwordCharacters[indx];
    console.log(indx)
  }
  // debugger;
return finalPassword;

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
generateBtn.addEventListener('click', writePassword); // element.addEventListener(event, function, useCapture);

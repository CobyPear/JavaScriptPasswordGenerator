// Assignment Code
var generateBtn = document.querySelector("#generate");

// GENERATOR FUNCTIONS

  // function that generates a random lowercase letter
  function getLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  console.log(getLowercase())
  // function that generates a random uppercase letter
  function getUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  console.log(getUppercase())
  // function that generates a random numeral
  function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };
  console.log(getNumber())
  // function that generates a random special character
  function getSpecial() {
    const special = '\\!@#$%^&*(){}[]=<>/",.:;`~';
    return special[Math.floor(Math.random() * special.length)];
  };
  console.log(getSpecial());

// function that generates the password

  function generatePassword(userLength, userLower, userUpper, userNumber, userSpecial) {
        // User Prompts as Variables

      // use a prompt to ask the user how long their password will be (between 8 and 128 characters). store this as a variable
      var userLength = prompt("Hello! How long would you like your password to be? (between 8 and 128)");

      if (userLength >= 8 && userLength <= 128) {
      } else {
        alert('Please enter a number between 8 and 128');
        userLength;
      };

      // use a confirm to ask if the user wants to include lowercase characters
      var userLower = confirm('Would you like your password to include lowercase letters?')

      // use a confirm to ask if the user wants to include uppercase characters
      var userUpper = confirm('Would you like your password to include uppercase letters?')

      // use a confirm to ask if the user wants to include numeric characters
      var userNumber = confirm('Would you like your password to include numerals?')

      // use a confirm to ask if the user wants to include special characters
      var userSpecial = confirm('Would you like your password to include special characters (i.e. !$/%^[&*)?')


       // initialize password variable
       var pw = [];
       // generate the password based on the passed in information
       // create an array that will store the types of characters the user wants
        var typesArr = [];
       // I think we need an if statement here. maybe a switch?
       
         // if user wants lowercase characaters, include this in the final password.
         // if the user wants uppercase characters, include this in the final password.
         // if the user wants numeric characters, include this in the final password.
         // if the user wants special characters, include this in the in the final password.

      // loop over length for each type
      for (let i = 0; i < userLength; i++) {
        // if the user wants all options
        if (userLower && userUpper && userNumber && userSpecial) {
           typesArr.push(getLowercase(), getUppercase(), getNumber(), getSpecial())[i];
           pw = typesArr.slice(0, userLength + 1);
           // if the user wants lower, upper and numbers
        } else if (userLower && userUpper && userNumber) {


          // if the user wants lower and uppercase letters
        } else if (userLower && userUpper) {
          // if the user wants only one option
        } else if (userLower || userUpper || userNumber || userSpecial) {

        }
      }
        
      console.log(typesArr);
      console.log(pw);
      //add final pw to the pw var and return it

  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



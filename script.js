// Assignment Code
"use strict";
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

    // use a prompt to ask the user how long their password will be (between 8 and 128 characters). store this as a variable
    var userLength = prompt("Hello! How long would you like your password to be? (between 8 and 128)");
    // store the userLength as a number
    userLength = parseInt(userLength);

    // create an array that will store the types of characters the user wants
    var typesArr = [];

    // I think we need an if statement here. maybe a switch?
    // check user input and generate approriate characters
    if (userLength >= 8 && userLength <= 128) {
        // use a confirm to ask if the user wants to include lowercase characters
        var userLower = confirm('Would you like your password to include lowercase letters?');
        // use a confirm to ask if the user wants to include uppercase characters
        var userUpper = confirm('Would you like your password to include uppercase letters?');
        // use a confirm to ask if the user wants to include numeric characters
        var userNumber = confirm('Would you like your password to include numerals?');
        // use a confirm to ask if the user wants to include special characters
        var userSpecial = confirm('Would you like your password to include special characters (i.e. !$/%^[&*)?');

        // if user wants lowercase characaters, include this in the final password.
        // if the user wants uppercase characters, include this in the final password.
        // if the user wants numeric characters, include this in the final password.
        // if the user wants special characters, include this in the in the final password.
      // loop will give us the proper length for the final password
      for (let i = 0; i < userLength; i++) {
        // if the user wants lowercase letters, push i lowercase letters to the array
        if (userLower) {
          typesArr.push(getLowercase())[i];
        };
        // if the user wants uppercase letters, push i uppercase letters to the array
        if (userUpper) {
          typesArr.push(getUppercase())[i];
        }
        // if the user wants numbers, push i numbers to the array
        if (userNumber) {
          typesArr.push(getNumber())[i];
        }
        // if the user wants special characters, push i special characters to the array
        if (userSpecial) {
          typesArr.push(getSpecial())[i];
        }
        else if (userLower == false && userUpper == false && userNumber == false && userSpecial == false) {

          return alert('Please select at least one type of character for your password and try again') ;
        }
      };
      // if the userLength is too low or too high, ask the user for an appropriate number
    } else {
      alert('Please enter a number between 8 and 128 and try again');
      return;
    };

    // set the result to a variable. the result will take a section of the appropriate lengthfrom the array
      // var finalPw = typesArr.slice(0, userLength).join('');

        // shuffle the password to make it more random
        //here's a function that will attempt to shuffle the array
      function shufflePassword(arr) {
        // switches up the indexes of the array
        return arr.sort(() => Math.random() - 0.5);
      };

      // set the result to a variable. the result will take a section of the appropriate lengthfrom the array
      var finalPw = typesArr.slice(0, userLength);
      // shuffle the password around
      shufflePassword(finalPw);
      // turn the password into a string
      finalPw = finalPw.join('');

      // debugging
      console.log('TYPESARR: ', typesArr);
      console.log('SHUFFLED PW: ', );
      // what is the final pw?
      console.log('FINALPW: ', finalPw);
      // does the final password match userLength?
      console.log('FINALPW LENGTH: ', finalPw.length);

      // return the generated password based on the passed in information
      return finalPw;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
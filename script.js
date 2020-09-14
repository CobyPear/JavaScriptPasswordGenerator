// Assignment Code
"use strict";
const generateBtn = document.querySelector("#generate");
const sliderRender = document.querySelector("#sliderValue");
const slider = document.querySelector("#slider");
const toggleBtn = document.querySelectorAll(".toggleBtn");
const generatedPassword = document.querySelector("#password")
// set initial value of slider value to default
sliderRender.textContent = slider.value;

const chars = {
  lowercase: false,
  uppercase: false,
  numerals: false,
  specialChars: false
};

// GENERATOR FUNCTIONS

// function that generates a random lowercase letter
function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
// function that generates a random uppercase letter
function getUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
// function that generates a random numeral
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
// function that generates a random special character
function getSpecial() {
  const special = '\\!@#$%^&*(){}[]=<>/",.:;`~';
  return special[Math.floor(Math.random() * special.length)];
};


// function that generates the password
function generatePassword(userLength, userLower, userUpper, userNumber, userSpecial) {
  // sets length of password to value of slider
  userLength = slider.value

  // create an array that will store the types of characters the user wants
  const typesArr = [];

  // I think we need an if statement here. maybe a switch?
  // check user input and generate approriate characters
  if (userLength) {
    // checkboxes determine type of characters to use in final password
    const userLower = chars.lowercase;
    const userUpper = chars.uppercase
    const userNumber = chars.numerals
    const userSpecial = chars.specialChars

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
        return;
    };
    // if the userLength is too low or too high, ask the user for an appropriate number
  };
}

  // shuffle the password to make it more random
  //here's a function that will attempt to shuffle the array
  function shufflePassword(arr) {
    // switches up the indexes of the array
    return arr.sort(() => Math.random() - 0.5);
  };

  // set the result to a variable. the result will take a section of the appropriate lengthfrom the array
  let finalPw = typesArr.slice(0, userLength);
  // shuffle the password around
  shufflePassword(finalPw);
  // turn the password into a string
  finalPw = finalPw.join('');

  // return the generated password based on the passed in information
  return finalPw;
};

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password || "Select at least one character type and try again";
};

// on change, update the value of the slider on the
slider.addEventListener("mousemove", (e) => {
  sliderRender.textContent = slider.value + " characters";
})

// on click, toggle the appropriate property in chars
for (const button of toggleBtn) {
  button.addEventListener("click", (e)=> {
    // flip the state of the char selected
    chars[button.id] = !chars[button.id];
  })
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// click password text area to copy password to clipboard
generatedPassword.addEventListener("click", (e) => {

    generatedPassword.select();
    generatedPassword.setSelectionRange(0, 999999);
  
    document.execCommand("copy");

    // $("#toast").toggle()
    $("#toast").toggle().fadeOut(3000)

})
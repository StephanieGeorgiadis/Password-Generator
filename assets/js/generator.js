/* Global Variables */
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "|", "~", "?", "/", "<", ">", "-"];

/* Password Generator Function */
function generatePassword() {
     
    passwordArr = [];

    var passwordLength = prompt("For your password length please enter a number between 8 and 128.");
    console.log(passwordLength);

    // If else and while statements to validate the input length of the passord.
    if (passwordLength === null) {
        return;
    } else {
        if ((passwordLength >= 8) && (passwordLength <= 128)) {
            var valid = true;
        } else {
            var valid = false;
        }
    }

    while (!valid) {
        if ((passwordLength >= 8) && (passwordLength <= 128)) {
            var valid = true;
        } else if (passwordLength === null) {
            return;
        } else {
            alert("Invalid password length please choose a number between 8 and 128.")

            passwordLength = prompt("For your password length please enter a number between 8 and 128.");
            console.log(passwordLength);
        }
    }

    length = parseInt(passwordLength,10);
    console.log("The password length is: " + length)

    // Confirmation variables for the user input.
    var upperChar = confirm("Would you like uppercase letters in your password?");
    var lowerChar = confirm("Would you like lowercase letters in your password?");
    var numberChar = confirm("Would you like numbers in your password?");
    var specialChar = confirm("Would you like special characters in your password?");

    trueStatements = 0;

    choicesArr = [];

    if (upperChar === true) {
        choicesArr.push(upper);
        passwordArr.push(upper[Math.floor(Math.random() * upper.length)]);
        trueStatements = trueStatements + 1;
    }

    if (lowerChar === true) {
        choicesArr.push(lower);
        passwordArr.push(lower[Math.floor(Math.random() * lower.length)]);
        trueStatements = trueStatements + 1;
    }

    if (numberChar === true) {
        choicesArr.push(number);
        passwordArr.push(number[Math.floor(Math.random() * number.length)]);
        trueStatements = trueStatements + 1;
    }

    if (specialChar === true) {
        choicesArr.push(special);
        passwordArr.push(special[Math.floor(Math.random() * special.length)]);
        trueStatements = trueStatements + 1;
    }

    console.log("Number of 'true' if statements is: " + trueStatements);
    console.log(choicesArr);

    pushArr(choicesArr);
    console.log("The password array is: " + passwordArr);

    var textarea = document.getElementById("password");
    textarea.value = passwordArr.join("");
}

/* Push the valu to the array function */
function pushArr(array) {
    for (var i = 0; i < (length - trueStatements); i++) {
        var x = Math.floor(Math.random() * trueStatements);
        var y = Math.floor(Math.random() * array[x].length);
        passwordArr.push(array[x][y]);
    }
}

/* Copy to Clipboard Function */
function copyToClipboard() {

    // Get the text field
    var copyText = document.getElementById("password");

    // Select the text field
    copyText.select()

    // Sets the selection range for mobile devices
    copyText.setSelectionRange(0,99999);

    // Copies the selected text
    document.execCommand("copy");

    if (textAreaField.value) {
        alert("Copied " + copyText.value + " to your clipboard!");
    } else {
        alert("Generate your pasword and try again!");
    }
}

/* Erase the text from previously generated password */
function erasePrevText() {
    document.getElementById("password").value="";
}
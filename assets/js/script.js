/* Global Variables */
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "|", "~", "?", "/", "<", ">", "-"];

/* Password Generator Function */
function generatePassword() {
    
    var passwordLength = prompt("Enter a number between 8 and 128");
    var passwordLengthInt = parseInt(passwordLength);
    var charTypes = 0;
    var passwordArr = [];
    var avblPasswordArr = [];

    if (passwordLengthInt >= 8 && passwordLengthInt <= 128) {
        var upperChar = confirm("Would you like upper case letters in your password?");
            if (upperChar) {
                var upperCharBool = true;
                var charTypes = charTypes + 1;
                passwordArr.push(upper);
            } else {
                var upperCharBool = false;
            }
        
        var lowerChar = confirm("Would you like lower case letters in your password?");
            if (lowerChar) {
                var lowerCharBool = true;
                var charTypes = charTypes + 1;
                passwordArr.push(lower)
            } else {
                var lowerCharBool = false;
            }
        
        var numberChar = confirm("Would you like numbers in your password?")
            if (numberChar) {
                var numberCharBool = true;
                var charTypes = charTypes + 1;
                passwordArr.push(number)
            } else {
                var numberCharBool = false;
            }
        
        var specialChar = confirm("Wpuld you like specail characters in your password?");
            if (specialChar) {
                var specialCharBool = true;
                var charTypes = charTypes + 1;
                passwordArr.push(special)
            } else {
                var specialCharBool = false;
            }

        if (types >= 1) {
            for (i = 0; i < passwordLengthInt.length; i++) {
                var randomValue = passwordLengthInt[Math.floor(Matg.random() * passwordLengthInt.length)];
                avblPasswordArr.push(randomValue);
            }
            var passwordString = avblPasswordArr.join("");
            console.log("Total number of password types chosen: " + types);
            console.log(passwordString);
            document.getElementById("password").value = passwordString;
        } else {
            alert("Please select a password type to generate your pasword.")
        }
    } else {
        alert("Please enter a number between 8 and 128.")
    }

}

/* Copy to Clipboard Function */
function coptToClipboard () {

    var textAreaField = document.getElementById("password");

    textAreaField.select()
    textAreaField.setSelectionRange(0,99999);
    document.execCommand("copy");

    if (textAreaField.value) {
        alert("Copied " + textAreaField.value + " to your clipboard!");
    } else {
        alert("Generate your pasword and try again!");
    }
}
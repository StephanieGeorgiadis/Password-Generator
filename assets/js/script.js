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
                true;
                charTypes = charTypes + 1;
                passwordArr.push(upper);
            } else {
                false;
            }
        
        var lowerChar = confirm("Would you like lower case letters in your password?");
            if (lowerChar) {
                true;
                charTypes = charTypes + 1;
                passwordArr.push(lower)
            } else {
                false;
            }
        
        var numberChar = confirm("Would you like numbers in your password?")
            if (numberChar) {
                true;
                charTypes = charTypes + 1;
                passwordArr.push(number)
            } else {
                false;
            }
        
        var specialChar = confirm("Wpuld you like specail characters in your password?");
            if (specialChar) {
                true;
                charTypes = charTypes + 1;
                passwordArr.push(special)
            } else {
                false;
            }

        if (charTypes >= 1) {
            for (i = 0; i < passwordLengthInt.length; i++) {
                var randomValue = passwordLengthInt[Math.floor(Matg.random() * passwordLengthInt.length)];
                avblPasswordArr.push(randomValue);
            }
            var passwordString = avblPasswordArr.join("");
            console.log("Total number of password types chosen: " + charTypes);
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
function copyToClipboard () {

    var copyText = document.getElementById("textarea");

    copyText.select()
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");

    if (textAreaField.value) {
        alert("Copied " + copyText.value + " to your clipboard!");
    } else {
        alert("Generate your pasword and try again!");
    }
}
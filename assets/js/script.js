// Creat a function to generate a password from an array of characters.
// Length must be between 8 and 128 characters in length.
// User must input a number for the length of the password and what characters they want in the password.

// "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
// "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
// " ", "!", """, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~"

/* Password Generator Function */
function generatePassword () {
    
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
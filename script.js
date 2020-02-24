// create array for lowercase characters
// source: https://gist.github.com/bendc/1e6af8f2d8027f2965da
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create array for uppercase characters
// source: https://gist.github.com/bendc/1e6af8f2d8027f2965da
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// create array for special characters
var specialString = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
var	specialArray = specialString.split("");

// create array for numbers
var numString = "0123456789";
var numArray = numString.split("");

// create array that holds final characters 
var finalArray=[];

// create variable that holds final password
var passwordResult = "";


// generate password
function generatePassword() {

	// get user preferences 
	var numOfChars = prompt("How many characters do you want?","Choose a value between 8 and 128", "");
	// add if statements to set min and max value
		
		// if(isNaN(numOfChars) || numOfChars<8 || numOfChars>128) {
		// 	alert("Choose a number between 8 and 128");
		// }

	// while (!isNaN(numOfChars) || numOfChars>=8 || numOfChars<=128) {
	// 	numOfChars = prompt("How many characters do you want?","Choose a value between 8 and 128", "");
	// } 
	// alert("Choose a number between 8 and 128");	

	var uppercasePref = confirm("Include uppercase characters? Press OK to include or Cancel to exclude");
	var specialPref = confirm("Include special characters? Press OK to include or Cancel to exclude");
	var numPref = confirm("Include numbers? Press OK to include or Cancel to exclude");
	var lowercasePref = confirm("By default, lowercase characters will be included");

	//input user password preferences
	if (uppercasePref) {
		// if user wants uppercase characters, add uppercase chars
		finalArray = finalArray.concat(uppercaseArray);
	}
	if (specialPref) {
		// if user wants special characters, add special chars
		finalArray = finalArray.concat(specialArray);
	}
	if (numPref) {
		// if user wants numbers, add numbers
		finalArray = finalArray.concat(numArray);
	}
	if (lowercasePref) {
		// if user only wants lowercase
		finalArray = finalArray.concat(lowercaseArray);				
	}

	for(var i=0; i<numOfChars; i++) {	
		// get random num
		var randomNum = Math.floor(Math.random() * finalArray.length);	
		// map char to random num
		var randomChars = finalArray[randomNum];
		passwordResult += randomChars;
	}		

	console.log(passwordResult);

	document.querySelector("#password").value = passwordResult;
}


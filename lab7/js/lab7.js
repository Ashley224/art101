/*
 * Author: Ashley Mojica <asmojica@ucsc.edu
 * Created: 3 Febuary
 * License: Public Domain
 */

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
	var userName = window.prompt( "HELLO! :) Please tell me your name so I can fit it.");
	console.log("userName=", userName);
	// split string to array
	var nameArray = userName.split('');
	console.log("nameArray =", nameArray);
	// sort the array
	var nameArraySort = nameArray.sort();
	console.log("nameArraySory =", nameArraySort);
	// join array back to a string
	var nameSorted = nameArraySort.join('');
	console.log("nameSorted =", nameSorted);
	// Note that I could have done the above lines as a single line:
	// userName.toLower().split("").sort().join("")
	return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name : ",
	sortUserName(), "</br>");
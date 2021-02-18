/*
 * Author: Ashley Mojica <asmojica@ucsc.edu>
 * Created: 15 February
 * License: Public Domain
 */

var button = document.getElementById("submit-button");
outputEl = document.getElementById("output");

function sortUserName(userName) {
  console.log("userName=", userName);
  // split string to array
  var nameArray = userName.split("");
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySory =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join("");
  console.log("nameSorted =", nameSorted);
  // Note that I could have done the above lines as a single line:
  // userName.toLower().split("").sort().join("")
  return nameSorted;
}

button.addEventListener("click", function () {
  inputValue = document.getElementById("name").value;
  console.log("You input:", inputValue);
  new1El = document.createElement("p");
  new1El.innerHTML = sortUserName(inputValue);
  outputEl.appendChild(new1El);
  console.log("result =", sortUserName(inputValue));
});

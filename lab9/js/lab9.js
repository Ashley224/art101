/*
 * Author: Ashley Mojica <asmojica@ucsc.edu>
 * Created: 10 February
 * License: Public Domain
 */
 
 outputEl = document.getElementById("output");

console.log(outputEl);

new1El = document.createElement("p");

new1El.innerHTML = "This is element 1";

new2El = document.createElement("p");

new2El.innerHTML = "This is element 2";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

document.getElementById("smaller").style.fontSize = "10pt";

document.getElementById("bigger").style.fontSize = "30pt";
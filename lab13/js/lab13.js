/*
 * Author: Ashley Mojica <asmojica@ucsc.edu>
 * Created: 17 February
 * License: Public Domain
 */

 function fizzBuzzBoom() {
  var output;
  for (var i = 1; i <= 200; i += 1) {
    output += i + ": ";
    if (i % 3 == 0) {
      output += "Fizz!";
    }
    if (i % 5 == 0) {
      output += "Buzz!";
    }
    if (i % 7 == 0) {
      output += "Boom!";
    }
    output += "<br>";
  }
  return output;
}

document.getElementById("output").innerHTML = fizzBuzzBoom();
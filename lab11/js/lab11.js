/*
 * Author: Ashley Mojica <asmojica@ucsc.edu>
 * Created: 17 February
 * License: Public Domain
 */

$("#challenge").append("<button id=cb>challenge");

$("#problem").append("<button id=pb>problem");

$("#result").append("<button id=rb>result");

$("#cb").click(function () {
  alert("Go away.");
  $("#output").append("<p>challenge button is pushed</p>");
  $("#pb").css("color", "green");
  $("#cb").css("color", "black");
});

$("#pb").click(function () {
  alert("Stop!!!");
  $("#output").append("<p>problem button is pushed</p>");
  $("#rb").css("color", "blue");
  $("#pb").css("color", "black");
});

$("#rb").click(function () {
  alert("Stop it already!");
  $("#output").append("<p>result button is pushed</p>");
  $("#cb").css("color", "yellow");
  $("#rb").css("color", "black");
});




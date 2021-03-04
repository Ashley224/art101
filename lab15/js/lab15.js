/*
 * Author: Ashley Mojica <asmojica@ucsc.edu>
 * Created: 3 March
 * License: Public Domain
 */

 var requestButton = document.getElementById("activate");
var output = document.getElementById("output");

requestButton.addEventListener("click", function () {
  $.ajax({
    type: "GET",
    url: "http://worldtimeapi.org/api/timezone/Europe/London",
    success: function (data) {
      console.log(data.datetime);
      output.innerHTML = data.datetime;
    },
    error: function () {
      // do stuff
      console.log("Fail Loading API");
      output.innerHTML = "Fail Loading API";
    },
  });
});

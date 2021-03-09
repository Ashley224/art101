/*
 * Author: Ashley Mojica <asmojica@ucsc.edu>
 * Created: 3 March
 * License: Public Domain
 */
 
var requestButton = document.getElementById("activate");
var output = document.getElementById("output");
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/614/info.0.json",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            id: 614,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
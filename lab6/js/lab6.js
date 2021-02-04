/*
 * Author: Ashley Mojica <asmojica@ucsc.edu
 * Created: 2 Febuary
 * License: Public Domain
 */

//Define Variables
myTransport = ["Drive", "Cycling", "Bus", "Walking,"
	];

myMainDrive = {
	make: "Toyota",
	model: "Camry",
	color: "SuperSonic Red",
	year: 2019,
	age:  function () {
		return 2019 - age;
	}
}

//output
document.writeln("Kind of transportation I use: ", myTransport, "<br>");
document.writeln("My Main Drive: <pre>",
	JSON.stringify(myMainDrive, null, '\t'),
	"</pre>"
   );
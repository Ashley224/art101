/*
 * Author: Ashley Mojica <asmojica@ucsc.edu>
 * Created: 8 March
 * License: Public Domain
 */

var issueNum = 1;
var refresh = document.getElementById("refresh");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var comicObj = {};

refresh.addEventListener("click", function () {
  getComic();
});

next.addEventListener("click", function () {
  getNext();
});

prev.addEventListener("click", function () {
  getPrev();
});

function output(output) {
  console.log("outputing: " + output);
  $("#output").html(output);
}

function getComic() {
  var url = "https://xkcd.com/" + issueNum + "/info.0.json";
  console.log(url);
  $.ajax({
    type: "GET",
    url: url,
    success: function (data) {
      console.log(data);
      comicObj = data;
      var comicFomatted = `<h3>${comicObj.title}</h3><img src=${comicObj.img} alt="${comicObj.alt}" title="${comicObj.alt}">`;
      output(comicFomatted);
    },
    error: function () {
      console.log("Fail Loading API");
      output("Fail to load API");
    },
  });
}

function getPrev() {
  console.log("current issueNum: " + issueNum);
  if (issueNum == 1) {
    console.log("You reach to the end of the comics");
    output(
      "You reach to the end of the comics. Refresh to view the first comic"
    );
  } else {
    issueNum = issueNum - 1;
    console.log("Get prv" + issueNum);
    getComic();
  }
}

function getNext() {
  issueNum = issueNum + 1;
  console.log("Get next" + issueNum);
  getComic();
}
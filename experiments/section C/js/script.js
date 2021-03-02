//keypress
//substring
//change border color when text is entered

var orignial_text = $("#orignal_text p").text();
console.log(orignal_text);

function matchText(){
  var input_text = $("#input_text").val();
  var substring_match = orignal_text.substring(0,input_text.length)
  console.log(substring_match);
  if (input_text==substring_match){
    $("#input_text").css("border-color","blue");
  }else{
    $("#input_text").css("border-color", "red");
  }
  //3 conditions
  //text matching before finishing blue
  //text not matching red
  //text matching total green

}
$("#input_text").keypress(matchText);

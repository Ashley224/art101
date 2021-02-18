function submitBio(){
var nameVar = document.getElementById("name").value;
console.log(nameVar);
var emailVar = document.getElementById("email").value;
console.log(emailVar);
var messageVar = document.getElementById("message").value;
console.log(messageVar);
document.getElementById("name_email_id").innerHTML = nameVar + " Email: "+ emailVar;
}
document.getElementById("bio_submit_id").addEventListener('click',submitBio);

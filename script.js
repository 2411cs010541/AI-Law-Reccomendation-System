function login(){

alert("Login Successful");

window.location="dashboard.html";

}

function signup(){

alert("Registration Successful");

window.location="login.html";

}

function contact(){

alert("Message Sent Successfully");

}

function analyzeCase(){

let text=document.getElementById("caseText").value.toLowerCase();

let result="";

if(text.includes("salary")){

result="<h4>Labour Law</h4><p>Your complaint may relate to salary payment issues.</p>";

}

else if(text.includes("theft")){

result="<h4>Theft</h4><p>Your complaint may relate to theft-related laws.</p>";

}

else if(text.includes("property")){

result="<h4>Property Dispute</h4><p>Your complaint may relate to property laws.</p>";

}

else if(text.includes("divorce")){

result="<h4>Family Law</h4><p>Your complaint may relate to family laws.</p>";

}

else{

result="<h4>No Match Found</h4><p>Please consult a legal expert.</p>";

}

document.getElementById("result").innerHTML=result;

}

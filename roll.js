document.querySelector("button").addEventListener("click",perform);
function perform(){
var randomNumber=Math.floor(Math.random()*6);
var randomDie=randomNumber+1;
var displayDie="../images/dice"+randomDie+".png";

image1=document.querySelector(".pic1");
image1.setAttribute("src",displayDie);

var randomNumber2=Math.floor(Math.random()*6 +1);
var displayDie2="../images/dice"+randomNumber2+".png";
image2=document.querySelector(".pic2");
image2.setAttribute("src",displayDie2);

message=document.querySelector("h1");
if(randomDie>randomNumber2) {
    message.innerHTML="Player 1 Wins &#129312;"
}else if (randomDie<randomNumber2) {
    message.innerHTML="Player 2 Wins &#129312;"
}else{
  message.innerHTML="DRAW &#128559;";
}
}

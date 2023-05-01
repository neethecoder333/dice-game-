var randomNumber1=Math.floor(Math.random()*6)+1 ;
//chose a number between 1 to 6
var randomDiceImage="dice"+randomNumber1+".png";
// create a string varying from dice1.png to dice6.png 

var randomImageSource="images/"+randomDiceImage
// create a string from images/dice1.png to images/dice6.png

var image1=document.querySelectorAll("img")[0]
// To chose the first image element (player 1) from the node return by querySelectorAll

image1.setAttribute("src",randomImageSource)
// set the srcAttribute to above random chosing dice face

var randomNumber2=Math.floor(Math.random()*6)+1 ;
//chose a number between 1 to 6

var randomImageSource2="images/dice"+randomNumber2+".png"
//create a string varying from dice1.png to dice6.png 
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)
// set the srcAttribute of second img in html to above random chosing dice face 

// if player 1 wins 
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1 wins"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 wins"
}

else{
    document.querySelector("h1").innerHTML="Draw"
}

 

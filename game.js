var userClickedPattern=[];
var gamePattern=[];
var buttonsColor=["red","blue","green","yellow"];

var randomNumber;
function nextSequence()
{
    randomNumber = Math.floor((Math.random()*4));
    return randomNumber;
}

var randomChosenColor= buttonsColor[nextSequence()];

gamePattern.push(randomChosenColor);

var a=new Audio("green.mp3");
a.play();

$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

function play()
{
    var iconBlinked= new Audio("sounds/"+randomChosenColor+".mp3"); 
    //iconBlinked.muted = true; // without this line it's not working although I have "muted" in HTML
    iconBlinked.play();
}
play();

// function userClick()
// {
//     $(".btn").click(function()
//     {
//         $(".btn").;
//     })
// }



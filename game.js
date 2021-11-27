var gamePattern=[];
var userClickedPattern=[];
var buttonsColor=["red","blue","green","yellow"];


var level=0;
var gameStarted=false;

$(document).keypress(function()
{
    if(!gameStarted)
    {
        $("#level-title").text("Level "+level);
        nextSequence();
        gameStarted=true;
    } 
})

function nextSequence()
{
    userClickedPattern=[]; 

    level++;
    $("#level-title").text("Level "+level);

    var randomNumber = Math.floor((Math.random()*4));
    var randomChosenColor= buttonsColor[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}


$(".btn").on("click",function()
    {
        var user=$(this).attr("id");
        userClickedPattern.push(user);

        playSound(user);
        animatePress(user);

        checkAnswer(userClickedPattern.length-1);
    });


function playSound(name)
{
    var iconBlinked= new Audio("sounds/"+ name +".mp3"); 
    iconBlinked.play();
}


function animatePress(currentColor)
{
   $("#"+currentColor).addClass("pressed");
   setTimeout(function()
   {
    $("#"+currentColor).removeClass("pressed");
   },100);
}


function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
            if(userClickedPattern.length===gamePattern.length)
            {
                setTimeout(function()
                {
                    nextSequence();     
                },1000);
            }
    }
    
    else 
    {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        },200);

        startOver();
    }

}

function startOver()
{
    level=0;
    gamePattern=[];
    gameStarted= false;
}
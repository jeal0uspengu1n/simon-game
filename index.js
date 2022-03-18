// alert("this works bitch");
var btnCol=["green", "red", "yellow", "blue"];
var gamePat=[];
var clickPat=[];
var lvl=-1;
var srt=1;
$(document).keypress(function(){
  if(srt==1)
    nextSeq();
  srt=0;
});



$(".btn").click(function(){
    var userChosen = $(this).attr("id");
    clickPat.push(userChosen);
    var aud=new Audio("sounds/"+userChosen+".mp3");
    aud.play();
    animatePress(userChosen);
    chkans(clickPat.length-1);
});

function chkans(level)
{
  if(gamePat[level]===clickPat[level])
  {
    console.log("chala");
    if(gamePat.length===clickPat.length)
    {
      clickPat=[];
      setTimeout(function(){
        nextSeq();
      },1000);
    }
  }
  else{
    // console.log("ye bhi chala");
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    $("body").addClass("game-over").delay(200).queue(function(){
      $("body").removeClass("game-over");
      $(this).dequeue();
    });
    $("h1").text("Game over! Press any key to restart");
    lvl=-1;
    srt=1;
    gamePat=[];
    clickPat=[];
  }
}


function nextSeq()
{
  lvl++;
  $("h1").text("Level " + lvl);
  var rand1= Math.random();
  rand1= Math.floor(rand1*4);
  var chosenCol= btnCol[rand1];
  gamePat.push(chosenCol);
  $("#"+ chosenCol).fadeOut(100).fadeIn(100);
  var aud=new Audio("sounds/"+chosenCol+".mp3");
  aud.play();

};
function animatePress(userChosen){
  $("#"+userChosen).addClass("pressed").delay(100).queue(function(){
    $("#"+userChosen).removeClass("pressed");
    $(this).dequeue();
  });
};

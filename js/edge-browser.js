

  function fly(){
    var heart = document.getElementById('heart');
    var position = 0;
    var flyingHeart = setInterval(frame, 70);

    function frame(){
        if(position === 60){
          clearInterval(position);
          heart.style.top = "";
          heart.style.left = "";
        }
        else {
          position++
          heart.style.top = position + 'px';
          heart.style.left = position + 'px';
        }
    }

  }
  fly();


  //SCENARIO 5.1

  // global variables
  var scenario1btn = document.getElementById('scenario1-btn');
  var scenarioParag = document.getElementsByClassName("scenario");
  var parent = document.getElementsByTagName('ol');
  var removeOption = document.getElementById('remove');
  var options = document.getElementsByTagName("li");
  var scenario2 = [];
  var stageOne = false;



  scenario1btn.addEventListener("click", function(event){
    console.log($("#scenario1-input").val());
    var userInput =  ($("#scenario1-input").val());
    console.log(userInput);
    var options = document.getElementsByTagName("li");
    var scenarioParag = document.getElementsByClassName("scenario");


//in the Edge browser scenario, user chooses correct option 2
// Wow! And is taken to a special win screen
  if (userInput === "2"){
    window.location.href = "level1-special-win.html";

 }
 //user chooses option 1 HA and is
 //taken to a special lose screen for browser snobs
 else if (userInput === "1"){
   window.location.href = "lose-screen-snob.html";

 }
});



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


  //SCENARIO 3.3

  // global variables
  var scenario1btn = document.getElementById('scenario1-btn');
  var scenarioParag = document.getElementsByClassName("scenario");
  var parent = document.getElementsByTagName('ol');
  var removeOption = document.getElementById('remove');
  var options = document.querySelectorAll(".options");
  console.log(options);
  var scenario2 = [];
  var stageOne = false;



function nextLevel(userInput) {

 //user picks option 2 GET OUT OF THERE
 //YOU WIN!
 if (userInput === "2"){
   window.location.href = "level2-win.html";

 }
 // user picks option 1 hug and is
 //taken to weird scenario with bag on his head (SC 3.2)
 else {
   window.location.href = "level2-sc3.1.html";

 }

}

for(var i = 0; i < options.length; i++){
  options[i].addEventListener("click", function(event){
  console.log(event.target.getAttribute("data-index"))
  var userInput = event.target.getAttribute("data-index");
  console.log(event);
   nextLevel(userInput);

 });
}

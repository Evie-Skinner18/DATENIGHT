

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
  var scenario2 = [];
  var stageOne = false;



function nextLevel(userInput) {
//to the long quote, user chooses option 1 AGREE and
// is taken to sc3.1
  if (userInput === "1" && stageOne === true){
    window.location.href = "level2-sc3.1.html";

 }
 //to the long quote, user chooses option 2 I'M OFF
 //and is taken to win screen
 else if (userInput === "2" && stageOne === true){
   window.location.href = "level2-win.html";

 }
 //user picks option 1 YES to performance art:
 //Shia give long quote
 else if (userInput === "1"){
   scenarioParag[0].innerHTML =
   ("'That's great that you like performance art. Personally, I think that the idea of the ‘star’ could become a prime site for the formulation of new stances whose honesty might advance a more satisfying kind of affect. What do you think?'")
   options[0].innerHTML = ("I agree, tell me more!");
   options[1].innerHTML = ("You really are as weird as they say. I'm off!");
   stageOne = true;
 }
 // user picks option 2 NO to performance art and is
 //taken to weird scenario with him crying (SC 3.2)
 else {
   window.location.href = "level2-sc3.2.html";

 }

}

for(var i = 0; i < options.length; i++){
  options[i].addEventListener("click", function(event){
  var userInput = event.target.getAttribute("data-index");
   nextLevel(userInput);

 });
}

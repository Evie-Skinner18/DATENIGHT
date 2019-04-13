

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
//to the invitation, user chooses option 1 DECLINE and
// is taken to sc3.2 him crying
  if (userInput === "1" && stageOne === true){
    window.location.href = "level2-sc3.2.html";

 }
 //to the invitation, user chooses option 2 ACCEPT
 //and is taken to special lose screen for weirdos
 else if (userInput === "2" && stageOne === true){
   window.location.href = "level2-lose-weird.html";

 }
 //user picks option 2 YES to wearing bag:
 //invite user to cabin in Lapland
 else if (userInput === "2"){
   scenarioParag[0].innerHTML =
   ("'You're welcome!' What fun you're having with Shia LaBoeuf! Since the date is going well, he invites you to stay with him in an isolated cabin in Lapland for the next few months. How do you react?")
   options[0].innerHTML = ("Decline his invitation and take the bag off your head");
   options[1].innerHTML = ("Accept his invitation saying 'JUST DO IT!'");
   stageOne = true;
 }
 // user picks option 1 NO to wearing bag and is
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

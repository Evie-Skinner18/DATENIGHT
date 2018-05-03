

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
  var options = document.querySelectorAll(".options");
  console.log(options);
  var scenario2 = [];
  var stageOne = false;



function nextLevel(userInput) {
//in the new smoking scenario, user chooses option 1 accept cig
// and is taken to lose screen for being fake
  if (userInput === "1" && stageOne === true){
    window.location.href = "level2-lose-screen-fake.html";

 }
 //in the new smoking scenario, user chooses option 2 decline cig
 //and is taken to sc3 ordering drink babe
 else if (userInput === "2" && stageOne === true){
   window.location.href = "level2-sc3.html";
 }
 //user picks option 1 aint no time like the present!
 else if (userInput === "1"){
   scenarioParag[0].innerHTML =
   ("Nice one. You hop in the ShiaMobile and soon arrive at the bar: before going in though, he wants to smoke a cigarette and offers you one. Not being a smoker yourself, you...");
   options[0].innerHTML = ("Accept his offer so you seem open and adventurous!");
   options[1].innerHTML = ("Politely but assertively decline, as it't not your thing.");
   stageOne = true;
 }
 // user picks more assertive option 2: meet up tonight
 else {
   scenarioParag[0].innerHTML =
   ("Nice one. You meet up that evening and find him smoking outside the bar: he offers you a cigarette. Not being a smoker yourself, you...");
   options[0].innerHTML = ("Accept his offer so you seem open and adventurous!");
   options[1].innerHTML = ("Politely but assertively decline, as it't not your thing.");
   stageOne = true;
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

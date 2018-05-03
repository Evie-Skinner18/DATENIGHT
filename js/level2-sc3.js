

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


  //SCENARIO 3

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
//in the new weird cinema scenario, user chooses option 1 film:
// Shia playing his dad, and is taken to sc 3.1
  if (userInput === "1" && stageOne === true){
    window.location.href = "level2-sc3.1.html";

 }
 //in the new weird cinema scenario, user chooses option 2
 //Even Stevens and is taken to sc 3.2 where he starts crying
 else if (userInput === "2" && stageOne === true){
   window.location.href = "level2-sc3.2.html";

 }
 //user picks option 1 real ale OR option 2 trebles: weird scenario 1
 // cinema
 else if (userInput === "1" || userInput === "2"){
   scenarioParag[0].innerHTML =
   ("Good choice. As you sip your drink, you naturally get chatting with Shia about cinema. What are you keen to ask?")
   options[0].innerHTML = ("So, tell me about this new film you're making where you play your own dad...");
   options[1].innerHTML = ("So tell me, what was the banter like on the set of Even Stevens?");
   removeOption.remove();
   stageOne = true;
 }
 // user picks option 3 cocktail and is taken to
 //weird scenario 2 performance art (SC3.3)
 else {
   window.location.href = "level2-sc3.3.html";

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

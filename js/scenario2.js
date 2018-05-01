
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


  //SCENARIO 2

  // global variables
  var scenario1btn = document.getElementById('scenario1-btn');
  var scenarioParag = document.getElementsByClassName("scenario");
  var parent = document.getElementsByTagName('ol');
  var removeOption = document.getElementById('remove');
  var options = document.getElementsByTagName("li");
  var scenario2 = [];
  var stageOne = false;



  scenario1btn.addEventListener("click", function(event){
    var userInput =  ($("#scenario1-input").val());
    var options = document.getElementsByTagName("li");
    var scenarioParag = document.getElementsByClassName("scenario");

  // in the new cheese/drink scenario, user selects option 2 shots
  // and is taken to the special lose screen for rudies (lose-screen-rude.html)
  if (userInput === "2" && stageOne === true){
    window.location.href = "lose-screen-rude.html";
 }
  // in the new chesse/drink scenario, user selects option 1 respect
  // and is taken to the contented silence scene (SC5 SILENCE)
    else if (userInput === "1" && stageOne === true){
      window.location.href = "level1-sc5-silence.html";
   }
  // user selects the correct option: 2 do you like cheese?
    else if (userInput === "2"){
      scenarioParag[0].innerHTML =
      ("Ooh I love a nice cool Emmental. You bond over your mutual love of cheese, and you ask if he'd like a drink. He doesn't drink alcohol for health reasons: how do you react?");
      options[0].innerHTML = ("Respect! Drinking certainly has its disadvantages.");
      options[1].innerHTML = ("Let yer hair down, we're on a date! Let's get shots!");
      stageOne = true;
    }
    else {
      // user picks impolite option 1: branch off to different scenario (TAKEN ABACK)
      scenario1btn.getAttributeNode("href").value = "level1-taken-aback.html";
    }

  });

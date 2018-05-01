

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


  //SCENARIO 3.1

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

  //in the new video game scenario, user chooses option 1 respect and is taken to contented silence (SC5)
    if (userInput === "1" && stageOne === true){
      window.location.href = "level1-sc5-silence.html";
   }
   // user selects the correct option: 1 apologise. Take user to 4.1 mutual love of video games
    else if (userInput === "1"){
      scenarioParag[0].innerHTML =
      ("Ooh I'm loving the new God of War at the moment! You bond over your mutual love of video games, and you ask if he'd like a drink. He doesn't drink alcohol for health reasons: how do you react?");
      options[0].innerHTML = ("Respect! Drinking certainly has its disadvantages.");
      options[1].innerHTML = ("Let yer hair down, we're on a date! Let's get shots!");
      stageOne = true;
    }
    else {
      // user picks losing option 2: not good enough.
      //take user to lose screen
      scenario1btn.getAttributeNode("href").value = "lose-screen.html";
    }

  });

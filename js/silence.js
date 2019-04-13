

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


  //SCENARIO 5

  // global variables
  var scenario1btn = document.getElementById('scenario1-btn');
  var scenarioParag = document.getElementsByClassName("scenario");
  var parent = document.getElementsByTagName('ol');
  var removeOption = document.getElementById('remove');
  var options = document.querySelectorAll(".options");
  var scenario2 = [];
  var stageOne = false;


function nextLevel(userInput) {

  // user selects correct option 2: ask about job. Take user to edge browser scene
   if (userInput === "2"){
     window.location.href = "level1-edge-browser.html";
   }
   // user selects correct option: 1 just chill. Take user to instant win page.
    else if (userInput === "1"){
      window.location.href = "level1-instant-win.html";
    }
    else {
      // user picks losing option 3: talk about Annie
      //take user to special lose screen for rudies
      window.location.href = "lose-screen-rude.html";
    }

  }

  for(var i = 0; i < options.length; i++){
    options[i].addEventListener("click", function(event){
    var userInput = event.target.getAttribute("data-index");
     nextLevel(userInput);

   });
  }

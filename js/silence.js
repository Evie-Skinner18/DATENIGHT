

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
  var options = document.getElementsByTagName("li");
  var scenario2 = [];
  var stageOne = false;



  scenario1btn.addEventListener("click", function(event){
    var userInput =  ($("#scenario1-input").val());
    var options = document.getElementsByTagName("li");
    var scenarioParag = document.getElementsByClassName("scenario");

   if (userInput === "2"){
     window.location.href = "level1-edge-browser.html";
   }
   // user selects the correct option: 1 just chill. Take user to instant win page.
    else if (userInput === "1"){
      window.location.href = "level1-instant-win.html";
    }
    else {
      // user picks losing option 3: talk about Annie
      //take user to special lose screen for rudies
      scenario1btn.getAttributeNode("href").value = "lose-screen-rude.html";
    }

  });

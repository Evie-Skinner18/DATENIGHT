

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

  // LEVEL 1, DATE WITH SHY MAN. If user input is b or c, change the
  // href that the button takes them to to LOSE SCREEN
  var scenario1btn = document.getElementById('scenario1-btn');
  var scenarioParag = document.getElementsByClassName("scenario");
  var parent = document.getElementsByTagName('ol');
  var removeOption = document.getElementById('remove');
  var options = document.getElementsByTagName("li");
  var scenario2 = [];
  var stageOne = false;


 //SCENARIO 1
  scenario1btn.addEventListener("click", function(event){
    var userInput = ($("#scenario1-input").val());

     if (userInput === "1" && stageOne === true){
      window.location.href = "level1-sc2.1.html";

    }
      else if (userInput === "1"){
        scenarioParag[0].innerHTML =
        ("I'd tapas that! You arrive half an hour late to find Sydney waiting for you at a table. When you sit down, do you...");
        options[0].innerHTML = ("Act as if nothing's wrong");
        options[1].innerHTML = ("Apologise profusely. TfL's been a nightmare!");
        var scenario2 = [scenarioParag[0], options[0], options[1]];
        stageOne = true;
        removeOption.remove();
      }
        else if (userInput === "2" && stageOne === true){
          scenario1btn.getAttributeNode("href").value = "level1-sc2.html";
        }

      else {
        scenario1btn.getAttributeNode("href").value = "lose-screen.html";
      }

  });

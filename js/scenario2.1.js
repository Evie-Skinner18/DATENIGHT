$(function(){

  console.log("connected");

  function fly(){
    var heart = document.getElementById('heart');
    var position = 0;
    var flyingHeart = setInterval(frame, 70);
    function frame(){
      //for(var position = 0; position < 60; position++){

        if(position === 60){
          clearInterval(position);
          heart.style.top = "";
          heart.style.left = "";
        }
        else {

          //console.log(heart);
          // debugger;
          position++
          heart.style.top = position + 'px';
          heart.style.left = position + 'px';
        }
      //}
    }
    // window.setInterval(fly(container)), 7000;
      //call the function to animate the heart once every 70ms

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


  scenario1btn.addEventListener("click", function(event){
    console.log($("#scenario1-input").val());
    var userInput =  ($("#scenario1-input").val());
    console.log(userInput);
    var options = document.getElementsByTagName("li");
    var scenarioParag = document.getElementsByClassName("scenario");

  // debugger
    if (userInput === "1"){
      // user picks option 1: branch off to no worries let's eat!(SC2)
      scenario1btn.getAttributeNode("href").value = "level1-sc2.html";

    }
    else {
      // user picks option 2: special lose screen for being a dick!
      window.location.href = "lose-screen-dick.html";

      //dont need to remove anything this time
      return scenarioParag[0], options[0], options[1];



    }

  });


}); //end of jq test function

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

// LEVEL 1, DATE WITH SHY MAN. If user input is b or c, change the
// href that the button takes them to to LOSE SCREEN
var scenario1 = document.getElementById('scenario1-btn');
var userInput = document.getElementById('scenario1-input').inputElement.value;
var options = document.getElementsByTagName("li");
var parent = document.getElementsByTagName('ol');
var child = document.getElementById('remove');



scenario1.addEventListener("click", function(event){
  debugger
  if (userInput === "1"){
    document.getElementsByClassName("scenario").innerHTML =
    ("I'd tapas that! You arrive half an hour late to find Sydney waiting for you at a table. When you sit down, do you...");
    options[0].innerHTML = ("Act as if nothing's wrong");
    options[1].innerHTML = ("Apologise profusely. TfL's been a nightmare!");
    parent.removeChild(child);
  }
  else {
    scenario1.getAttributeNode("href").value = "lose-screen.html";
  }
});

// toScenario2


//
// };
//
// userInput.addEventListener("input", function()){
//
// };

var questionNum = 0; // keep count of question, used for IF condition.
var question = "<h1>Wie heisst du?</h1>"; // first question

var output = document.getElementById("output"); // store id="output" in output variable
output.innerHTML = question; // ouput first question

function bot() {
  var input = document.getElementById("input").value;
  console.log(input);

  if (questionNum == 0) {
    output.innerHTML = "<h1>Hallo " + input + "</h1>"; // output response
    document.getElementById("input").value = ""; // clear text box
    question = "<h1>Wie alt bist du?</h1>"; // load next question
    setTimeout(timedQuestion, 2000); // output next question after 2sec delay
  } else if (questionNum == 1) {
    output.innerHTML =
      "<h1>Das heisst du bist im Jahr " +
      (2019 - input) +
      " oder " +
      (2020 - input) +
      " geboren</h1>";
    document.getElementById("input").value = "";
    question = "<h1>Danke für deine kurze Unterhaltung</h1>";
    setTimeout(timedQuestion, 2000);
  }
}

function timedQuestion() {
  output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function (e) {
  if (e.which == 13) {
    bot(); // run bot function when enter key pressed
    questionNum++; // increase questionNum count by 1
  }
});

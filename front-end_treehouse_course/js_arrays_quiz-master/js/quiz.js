var questions = [
 ['How many strings electric guitar usually have?', 6],
 ['How many wheels does a car usually have?', 4],
 ['How many floors Zlota 44 have?', 52],
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong=[];


function print(message) {
  var outputDiv=document.getElementById('output');
  outputDiv.innerHTML=message;
}

function buildList(arr) {
 var listHTML = '<ol>';
  for (var i=0; i<arr.length; i+=1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML+='</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  } 
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct: </h2>';
html += buildList(correct);
html += '<h2> You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);

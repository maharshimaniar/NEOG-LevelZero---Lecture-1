var readLineSync = require('readline-sync');
//Homework
var stars = readLineSync.question("Enter no. of Stars : ");

for (var i = 0; i <= stars; i++) {
  var str = "";
  for (var j = 0; j < i; j++) {
    str += "*";
  }
  console.log(str);
}
console.log("-------------");
console.log("Inverted Star");
console.log("-------------");
for (var i = stars; i >= 0; i--) {
  var str = "";
  for (var j = i; j > 0; j--) {
    str += "*";
  }
  console.log(str);
}

//Classwork

name = readLineSync.question("Enter your name : ");
console.log("Welcome " + name + " to DO YOU KNOW MAHARSHI?");
score = 0;

highScores = [{ name: "Maharshi", score: 3 }, { name: "Nirav", score: 2 }]
questions = [{
  question: "Where do I live?",
  answer: "Rajkot"
}, {
  question: "Where do I work?",
  answer: "ZS"
}, {
  question: "What is my hobby?",
  answer: "Code"
}];

function play(question, answer) {
  userAnswer = readLineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Correct!");
    score += 1;
    console.log("Score : ", score);
  }
  else {
    console.log("Wrong!");
    score -= 1;
    console.log("Score : ", score);
  }
  console.log("-----------------")
}

function highScorePrint(rank, name, highScore) {
  console.log(rank, " ", name, " : ", highScore);
}
function highScoreCheck(name, highScore) {
  if (score > highScore) {
    console.log("Congratulations! You have broken ", name, "'s Highscore.");
    return true;
  }
  else if (score === highScore) {
    console.log("Congratulations! You have leveled ", name, "'s Highscore.");
    return true;
  }
  else {
    console.log("You didn't brake Highscore. Better luck Next Time...");
    return false;
  }
}
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
console.log("Final Score : ", score);
console.log("");
console.log("Highscores");
console.log("-----------")
for (var i = 0; i < highScores.length; i++) {
  highScorePrint(i + 1, highScores[i].name, highScores[i].score);
}

for (var i = 0; i < highScores.length; i++) {
  var flag = highScoreCheck(highScores[i].name, highScores[i].score);

  if (flag) {
    break;
  }
}
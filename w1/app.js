// Code 201 Day 02
// Demo code for lecture & lab

var userAction = document.getElementById("quizMe");
if (userAction.addEventListener)
    userAction.addEventListener("click", quizUser, false);
else if (userAction.attachEvent)
    userAction.attachEvent('onclick', quizUser);

var userName = prompt('What is your name?');
console.log('The user said there name is ' + userName);

alert('Hey there ' + userName + ', I\'m going to ask you some questions about me. Please click "ok", then answer Y or N to the next question.');

var numTries = 0;
var keepAsking = true;

while (keepAsking) {
  numTries++;
  var userResponse = prompt('Was, I born on the moon?');
  console.log('userResponse: ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
    alert('Nope, I was actualy born on the moon. I\'ma moonian computer language.');
    keepAsking = false;
  } else if (userResponse === 'Y') { // TODO: Make this more robust!
    alert('Nice, I was born on the moon');
    keepAsking = false;
  } else {
    alert('Ooops!, you should have given a Y or N, so you loose this round.');
  }

} // while

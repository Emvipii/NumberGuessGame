var score = {computer: 0, player: 0}
while(userNumber !="stop"){
var randomNumber = Math.floor(Math.random() * 5)
var userNumber = prompt("Guess a number between 0 and 5")
if (userNumber == "stop"){break}
if (randomNumber == userNumber){alert("You got it!")
score.player += 1}
else {alert("Fail, the number was "+randomNumber)
score.computer += 1}}
document.write(`<h1>Your score is ${score.player}, The cpu's score is ${score.computer}</h1>`)

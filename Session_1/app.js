var Ayaguess = window.prompt("Aya's guess is: ");
var Sarahguess = window.prompt("Sarah's guess is: ");
var dice = Math.ceil(Math.random()*6)
alert('The number is ' + dice)

var differneceAyaAndDice = Math.abs(Ayaguess - dice);
var differenceSarahAndDice = Math.abs(Sarahguess - dice);

if (differneceAyaAndDice > differenceSarahAndDice) {
alert('Sarah wins')
} else if(differneceAyaAndDice < differenceSarahAndDice) {
alert('aya wins')
} else {
    alert('tie')
}
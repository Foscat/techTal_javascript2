// Example
function add() {
	var sum = 0;
	for(var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}
add(1,2,3,4,5,6,7,8);

// Exercise 1 slide 1

// create a variable titled billAmount and store a random number (ie: 100)
var billAmount = 100;
var coolio = "Wayy too cool"
var inputG = "";

document.getElementById("inputBtn").addEventListener("click", changeInput);

// create a function titled gratuity()gratutity should: multiply the value of billAmount by 20%   **hint: use 0.2** 
// return the value
function gratuity(cost){
   var numCost = parseInt(cost);
   console.log("Base bill price: " + numCost);
   var tip = numCost * .2;
   console.log("Your gratuity cost is: " + tip);
   addUpCost(numCost, tip);
}

addUpCost = (cost, tip) => {
   var totalCost = (cost += tip);
   // var cleanCost = totalCost.toFixed(2);
   console.log("Your total cost after gratuity: " + totalCost);
   document.getElementById("totalShow").innerHTML = "Your total cost after gratuity: $" + totalCost;
}

function changeInput(){
   billAmount = document.getElementById("inputBar").value;
   gratuity(billAmount);
   console.log(billAmount);
}

// End exercise 1 slide 1

// Start exercise 2 slides 1

// Define a hands array with the values 'rock', 'paper', and 'scissors';
var hands = ["Rock", "Paper", "Scissors", "Rock", "Paper", 
"Scissors", "Rock", "Paper", "Scissors","Rock", "Paper", "Scissors",];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
getHand = () => {
   var randomNum = hands[parseInt(Math.random()*10)];
   return randomNum;
}
// Define two objects for two players. Each player has name and getHand() properties.
var dude1 = {name: "Kyle", score: {w:0,t:0,l:0}};
var dude2 = {name: "Darren", score: {w:0,t:0,l:0}};
var dude3 = {name: "Ben Dover", score: {w:0,t:0,l:0}};
var dude4 = {name: "Mike Hunt", score: {w:0,t:0,l:0}};
var winnerPool = [];

// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)
function playRound(p1,p2){
   p1.hand = getHand();
   p2.hand = getHand();
   // console.log(p1, p2);
   if(p1.hand === p2.hand){
      // console.log("It's a tie!")
      p1.score.t++
      p2.score.t++
   }
   if(p1.hand === "Rock"){
      if(p2.hand === "Paper"){
         // console.log(p2.name + " wins!")
         p2.score.w++
         p1.score.l++
      }
      if(p2.hand === "Scissors"){
         // console.log(p1.name + " wins!")
         p1.score.w++
         p2.score.l++
      }
   }
   if(p1.hand === "Paper"){
      if(p2.hand === "Scissors"){
         // console.log(p2.name + " wins!")
         p2.score.w++
         p1.score.l++
      }
      if(p2.hand === "Rock"){
         // console.log(p1.name + " wins!")
         p1.score.w++
         p2.score.l++
      }
   }
   if(p1.hand === "Scissors"){
      if(p2.hand === "Rock"){
         // console.log(p2.name + " wins!")
         p2.score.w++
         p1.score.l++
      }
      if(p2.hand === "Paper"){
         // console.log(p1.name + " wins!")
         p1.score.w++
         p2.score.l++
      }
   }
}

seeWinner = (arg1, arg2) => {
   // console.log(arg1, arg2);
   var winner = null;
   if(arg1.score.w > arg2.score.w){
      console.log(arg1.name + " is the overall winner");
      winner = arg1;
   }
   if(arg2.score.w > arg1.score.w){
      console.log(arg2.name + " is the overall winner");
      winner = arg2
   }
   if(arg2.score.w === arg1.score.w){
      console.log("The game ended in a tie.");
   }
   winnerPool.push(winner);
}

function startGames(){
   for(var i=0; 5 > i; i++){
      playRound(dude1, dude2);
      playRound(dude3, dude4);
   }
   seeWinner(dude1, dude2);
   seeWinner(dude3, dude4);
   console.log(winnerPool);
};

startGames();





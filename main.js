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

document.getElementById("inputBtn").addEventListener("click", changeInput);

// create a function titled gratuity()gratutity should: multiply the value of billAmount by 20%   **hint: use 0.2** 
// return the value
gratuity = function(cost){
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
// Define two objects for two players. 
var dude1 = {name: "Kyle", score: {w:0,t:0,l:0}};
var dude2 = {name: "Darren", score: {w:0,t:0,l:0}};
var toFive = false;
var winnerPool = [];
// Define a function called playRound() that:
   // 1 Takes two player objects as arguments
   // 2 Gets hands from each
   // 3 Determines the winner
   // 4 Logs the hands played and name of the winner.
   // 5 If its a tie, log the hands played and "it's a tie".
   // 6 Returns the winner object (null if no winner)

// 1 
// serves as the game logic of reading the strings and changes the score accordingly 
function playRound(p1,p2){

   // 2 
   // Each player has name and getHand() properties.
   // they are assigned here so they get a new random # each iteration
   p1.hand = getHand();
   p2.hand = getHand();

   // console.log(p1, p2); //check that arguments came in correctly

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
   if(p1.score.w === 5){
      toFive = true;
   }
   if(p2.score.w === 5){
      toFive = true;
   }
}

// 3
// This function is made seperate so that it only fires when the while loop ends
// If it was part of the function that is called in the iterator it would repeate and fire each iteration
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
   winnerPool.push(winner);
}

function startGames(){
   while(toFive === false){
      playRound(dude1, dude2);
   }
   seeWinner(dude1, dude2);
   console.log(dude1, dude2);
};

startGames();


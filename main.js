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
var hands = ["Rock", "Paper", "Scissors", "Rock", "Paper", "Scissors", "Rock", "Paper", "Scissors","Rock", "Paper", "Scissors",];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
getHand = () => {
   var randomNum = hands[parseInt(Math.random()*10)];
   return randomNum;
}
// Define two objects for two players. Each player has name and getHand() properties.
var dude1 = {name: "Kyle", hand: getHand()}
var dude2 = {name: "Darren", hand: getHand()}

function playRound(p1,p2){
   console.log(p1, p2);
}

playRound(dude1, dude2);
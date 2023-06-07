//Right now im setting up the functions to make all three buttons work
function handleButton1Click() {
  console.log("Button 1 clciked!");
  var result = document.getElementById("result");
  result.textContent = "Popcorn";
}

function handleButton2Click() {
  console.log("Button 2 clicked!");
  var result = document.getElementById("result");
  result.textContent= "Wings";
}

function handleButton3Click() {
  console.log("Button 3 clicked!")
  var result = document.getElementById("result");
  result.textContent= "Oysters";
}

//After I added the button elements
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

//At first my code wasn't working and it is because I forgot to add the click event listeners
button1.addEventListener("click", handleButton1Click);
button2.addEventListener("click", handleButton2Click);
button3.addEventListener("click", handleButton3Click);

//Made the results of the buttons my favortie foods
var foods = ["Popcorn", "Wings", "Oysters"];

var result = document.getElementById("result");

for (var i = 0; i < foods.length; i++) {
  var fruit = document.createElement("p")
  foods.textContent = foods[i];
  result.appendChild(fruit)
}
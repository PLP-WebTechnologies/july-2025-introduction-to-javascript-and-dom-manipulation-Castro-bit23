// ====================
// Week 5 Assignment - Eugene Odhiambo
// ====================

// --------------------
// Part 1: JS Basics
// --------------------
let name = "Eugene Odhiamb";
let age = 27; // You can adjust this
let ageMessage = "";

if (age >= 18) {
  ageMessage = `${name} is an adult ✅`;
} else {
  ageMessage = `${name} is a minor ❌`;
}
document.getElementById("ageCheck").innerText = ageMessage;

// --------------------
// Part 2: Functions
// --------------------
function greet(user) {
  return `Hello, ${user}! 👋 Welcome to my JS assignment.`;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

document.getElementById("greetOutput").innerText = greet("Visitor");
document.getElementById("totalOutput").innerText =
  "Total (200 x 3) = " + calculateTotal(200, 3);

// --------------------
// Part 3: Loops
// --------------------
let fruits = ["Apple", "Mango", "Banana", "Pineapple"];
let fruitList = document.getElementById("fruitList");

// For loop to display fruits
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.innerText = fruits[i];
  fruitList.appendChild(li);
}

// While loop countdown
let countdown = 5;
let countdownDiv = document.getElementById("countdown");

while (countdown > 0) {
  countdownDiv.innerHTML += `⏳ Countdown: ${countdown}<br>`;
  countdown--;
}

// --------------------
// Part 4: DOM Manipulation
// --------------------

// Change text
document.getElementById("title").innerText =
  "🚀 Mastering JavaScript Fundamentals";

// Toggle Dark Mode
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Create new element dynamically
let newPara = document.createElement("p");
newPara.innerText =
  "This paragraph was dynamically added using JavaScript DOM methods!";
document.getElementById("dynamicContent").appendChild(newPara);

var planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9],
];

// Calculates the weight of the user on a given planet
function calculateWeight(weight, planetName) {
  let result = null;
  planets.forEach((planet) => {
    if (planet[0] === planetName) {
      let gravity = planet[1];
      result = weight * gravity;
    }
  });
  return result;
}

// Populates the planets in the dropdown menu
let planetSelection = document.getElementById("planets");
planets.reverse().forEach((planet) => {
  let option = document.createElement("option");
  option.value = planet[0];
  option.textContent = planet[0];
  planetSelection.appendChild(option);
});

// Outputs the results 
function handleClickEvent(e) {
  let userWeight = Number(document.getElementById("user-weight").value);
  let planetName = document.getElementById("planets").value;
  let result = calculateWeight(userWeight, planetName);
  let output = document.getElementById("output");
  output.textContent = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
}

let button = document.getElementById("calculate-button");
button.onclick = handleClickEvent;

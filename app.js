const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexValueOne = document.querySelector(".hex-value-1");
const hexValueTwo = document.querySelector(".hex-value-2");
const colorSquareOne = document.querySelector(".color-square-1");
const colorSquareTwo = document.querySelector(".color-square-2");

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

const getRandomHex = (event) => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  if (event.target.id === "btn-1") {
    hexValueOne.textContent = hexColor;
    colorSquareOne.style.backgroundColor = hexColor;
  } else {
    hexValueTwo.textContent = hexColor;
    colorSquareTwo.style.backgroundColor = hexColor;
  }
};

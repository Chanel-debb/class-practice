let box = document.querySelector(".box");
let redBtn = document.getElementById("red-btn");
let blueBtn = document.getElementById("blue-btn");
let greenBtn = document.getElementById("green-btn");

const clicked = () => {
  console.log("I have been clicked");
};

const makeBlue = () => {
  box.classList.remove("red");
  box.classList.remove("green");
  box.classList.add("blue");
};

greenBtn.addEventListener("click", clicked);
 
blueBtn.addEventListener("click", makeBlue);


const makeRed = () => {
  box.classList.remove("blue");
  box.classList.remove("green");
  box.classList.add("red");
};


const makeGreen = () => {
  box.classList.remove("blue");
  box.classList.remove("red");
  box.classList.add("green");
};

greenBtn.addEventListener("click", makeGreen);

blueBtn.addEventListener("click", makeBlue);
redBtn.addEventListener("click", makeRed );
let box = document.querySelector(".greenbox")
let greenbutton = document.getElementById("green-button")
let pinkbutton = document.getElementById("pink-button")
let bluebutton = document.getElementById("blue-button")


const clicked= ()=>{
    console.log("I have been clicked")
}

const makeGreen =() =>{
    box.classList.remove("pink")
    box.classList.remove("blue")
    box.classList.add("green")
};
const makePink = () => {
  box.classList.remove("green");
  box.classList.remove("blue");
  box.classList.add("pink");
};
const makeBlue = () => {
  box.classList.remove("green");
  box.classList.remove("pink");
  box.classList.add("blue");
};

greenbutton.addEventListener("click", makeGreen)

bluebutton.addEventListener("click", makeBlue)

pinkbutton.addEventListener("click", makePink)

    
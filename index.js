//Elements
const timeElement = document.getElementById("timeEl");
const devDesElement = document.getElementById("intro-head");
const introTextElement = document.getElementById("intro-text");
const faceSquareElement = document.getElementById("faceSquare");
const starFieldElement = document.getElementById("starField");

starFieldElement.addEventListener("click", () => {
  console.log("click");
});

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();

//Assignments
const introhead = "Design. Develop.";
const introText = "Fredrik, a programmer and graphic designer based in southern Sweden. Scroll down to learn more";
let index = 0;
let index1 = 0;

//Text typing
const introHeadInterval = setInterval(() => {
  if (index < introhead.length) {
    devDesElement.textContent += introhead[index];
    index++;
  } else {
    clearInterval(introHeadInterval);
    writeText();
  }
}, 90);
function writeText() {
  const introTextInterval = setInterval(() => {
    if (index1 < introText.length) {
      introTextElement.textContent += introText[index1];
      index1++;
    } else {
      clearInterval(introTextInterval);
    }
  }, 40);
}

//Functions
function updateTime() {
  // Format the string with leading zeroes
  const clockStr = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  timeElement.innerText = clockStr;

  // Set a timeout for one minute
  setTimeout(updateTime, 60000);
}
updateTime();

//Increase Opacity of Text element
let opacityInit = 0;
if (opacityInit == 0) {
  setInterval(() => {
    if (opacityInit < 1) {
      opacityInit += 0.03;
      console.log("Opacity is being Increased");
      devDesElement.style.opacity = opacityInit;
    }
  }, 30);
}

//Generate Starfield
function starGeneration() {
  const starEl = document.createElement("img");
  starEl.innerText = "JSTAR";
  starEl.setAttribute("src", "/External-Resources/flowers.svg");
  starEl.classList.add("smallStars");

  starFieldElement.appendChild(starEl);

  console.log("starGeneration function was run");
}

let amountOfStars = 0;
const printStar = setInterval(() => {
  if (amountOfStars < hours) {
    starGeneration();
    amountOfStars++;
  } else {
    clearInterval(printStar);
  }
}, 1);

//Elements
const timeElement = document.getElementById("timeEl");
const devDesElement = document.getElementById("intro-text");

//Assignments
const introtext = "Design. Develop."
let index = 0;

const interval = setInterval(() => {
  if (index < introtext.length){
    devDesElement.textContent += introtext[index];
    index++;
  } else {
    clearInterval(interval)
  }
  
}, 100);

//Functions
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Format the string with leading zeroes
  const clockStr = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  timeElement.innerText = clockStr;

  // Set a timeout for one minute
  setTimeout(updateTime, 60000);
}
updateTime();

let opacityInit = 0;
if (opacityInit == 0) {
  setInterval(() => {
    if (opacityInit < 1) {
      opacityInit += 0.03;
      console.log(opacityInit);
      devDesElement.style.opacity = opacityInit;
    }
  }, 30);
}

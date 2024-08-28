//Elements
const timeElement = document.getElementById("timeEl");
const devDesElement = document.getElementById("intro-head");
const faceSquareElement = document.getElementById("faceSquare")

//Assignments
const introhead = "Design. Develop."
let index = 0;

const interval = setInterval(() => {
  if (index < introhead.length){
    devDesElement.textContent += introhead[index];
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
//Dragable Square
  faceSquareElement.addEventListener("click",()=>{
    console.log("hi square")
    faceSquareElement.style.backgroundColor = "blue"
  })


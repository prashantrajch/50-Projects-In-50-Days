const hourElm = document.querySelector(".hour");
const minuteElm = document.querySelector(".minute");
const secondElm = document.querySelector(".second");
const timeElm = document.querySelector(".time");
const dateElm = document.querySelector(".date");
const btn = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

btn.addEventListener("click", (e) => {
  if (document.all[0].classList.toggle("dark"))
    e.target.innerText = "Light mode";
  else e.target.innerText = "Dark mode";
});

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const second = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourElm.style.transform = `translateX(-50%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
    minuteElm.style.transform = `translateX(-50%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondElm.style.transform = `translateX(-50%) rotate(${scale(second,0,59,0,360)}deg)`

    timeElm.innerText = `${hoursForClock < 10 ? '0'+hoursForClock : hoursForClock}:${minutes < 10 ? '0'+minutes : minutes} ${ampm}`;
    dateElm.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()

setInterval(setTime,1000)
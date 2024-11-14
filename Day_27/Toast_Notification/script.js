const button = document.getElementById("toast-button");
const toasts = document.getElementById("toasts");

const messages = [
  "This is a info toast notification",
  "This is a success toast notification",
  "This is a warning toast notification",
  "This is a error toast notification",
];

const types = ["info", "success", "warning", "error"];
const icons = [
  '<i class="fa-solid fa-circle-info info"></i>',
  '<i class="fa-solid fa-circle-check success"></i>',
  '<i class="fa-solid fa-triangle-exclamation warning"></i>',
  '<i class="fa-solid fa-circle-exclamation error"></i>',
];

button.addEventListener("click", createNotification);

//For what timing to remove toast
const duration = 5000;

function createNotification() {
  // Create random number for select random toast
  const randomNumber = getRandomNumber();

  // Create toast element
  const notifyDiv = document.createElement("div");
  notifyDiv.classList.add("toast");
  notifyDiv.classList.add(types[randomNumber]);
  notifyDiv.innerHTML = `       
        <i class="fa-solid fa-xmark close-btn"></i>
        <div class="toast-content">
        ${icons[randomNumber]}
          <p class="toast-message">${messages[randomNumber]} !</p>
        </div>
        <div class="progress-bar ${types[randomNumber]}"></div>
        `;

  // Append toast to the container
  toasts.append(notifyDiv);

  // Setup progress bar and timing
  const progressBar = notifyDiv.querySelector(".progress-bar");
  let startTime = 100;
  let intervalId;

  function updateProgessBar() {
    startTime += 100;
    const progressWidth = Math.max(0, 100 - (startTime / duration) * 100);
    progressBar.style.width = progressWidth + "%";

    if (startTime > duration + 100) {
      clearInterval(intervalId);
      notifyDiv.remove(); // Remove toast when time is up
    }
  }

  // Start timer for the progress bar
  function startTimer() {
    intervalId = setInterval(updateProgessBar, 100);
  }

  // Pause timer for progress bar
  function pauseTimer() {
    clearInterval(intervalId);
  }

  // Start the timer initially
  startTimer();

  // Add event listeners for pause on hover
  notifyDiv.addEventListener("mouseover", pauseTimer);
  notifyDiv.addEventListener("mouseout", startTimer);

  // Handle close button click
  notifyDiv.querySelector(".close-btn").addEventListener("click", () => {
    clearInterval(intervalId);
    notifyDiv.remove();
  });
}

// This fuction is use for create random number
function getRandomNumber() {
  return Math.floor(Math.random() * types.length);
}

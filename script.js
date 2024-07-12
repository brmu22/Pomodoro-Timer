let timer;
let time = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateTimer();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert('Time is up!');
      }
    }, 1000);
  }
}

function stopTimer() {
    clearInterval(timer); // Clear the interval to stop the timer
    isRunning = false; // Set isRunning to false to indicate that the timer is stopped
  }
  
function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  time = 25 * 60;
  updateTimer();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateTimer();

// Function to set custom timer
function setCustomTimer() {
    const timerInput = document.getElementById('timerInput');
    const newTime = parseInt(timerInput.value) * 60; // Convert minutes to seconds
  
    if (!isNaN(newTime) && newTime > 0) {
      time = newTime;
      updateTimer();
      closePopup();
    } else {
      alert('Please enter a valid time in minutes.');
    }
  }
  
// Function to toggle settings popup
const settingsButton = document.getElementById('settingsButton');
const settingsPopup = document.getElementById('settingsPopup');
const dimBackground = document.createElement('div');
dimBackground.classList.add('dim-background');

settingsButton.addEventListener('click', () => {
  settingsPopup.classList.toggle('active');
  document.body.appendChild(dimBackground);
  dimBackground.addEventListener('click', closeSettingsPopup);
});

function closeSettingsPopup() {
  settingsPopup.classList.remove('active');
  dimBackground.remove();
}

// Function to close settings popup when close button is clicked
function closePopup() {
  settingsPopup.classList.remove('active');
  dimBackground.remove();
}

// Function to change background
function changeBackground(option) {
    const body = document.body;
    switch(option) {
      case "gradient1":
        body.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";
        break;
      case "gradient2":
        body.style.background = "linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%)";
        break;
      case "gradient3":
        body.style.background = "radial-gradient(#e66465, #9198e5)";
        break;
      case "gradient4":
        body.style.background = "linear-gradient(to right, #DECBA4, #3E5151)";
        break;
      case "gradient5":
        body.style.background = "linear-gradient(to right, #0f0c29, #302b63, #24243e)";
        break;
      default:
        body.style.background = "radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8c9ade, #7f99d9, #7398d4, #658cc6, #5781b8, #4975ab, #3a6a9d)";
    }
  }
  
  
  
  

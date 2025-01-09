const resetBtn = document.getElementById('reset');
const playBtn = document.getElementById('play');
const timerEl = document.getElementById('timer');
const root = document.querySelector(':root');

// Initial setup

const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);

const timerInterval = setInterval(run, 1000);



playBtn.addEventListener('click',() =>{
    playing = !playing;
    playBtn.classList.toggle('play');
    playBtn.classList.toggle('bg-green-500'); // Toggle the color class
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.toggle('fa-play'); // Toggle the play icon
    playIcon.classList.toggle('fa-pause'); // Toggle the pause icon
})
resetBtn.addEventListener('click', resetAll);


// Run the timer

function run(){
    if(playing){
        currentSeconds -= 1;
        if(currentSeconds <= 0){
            clearInterval(timerInterval)
            resetAll();
        }
        timerEl.innerText = formatTime(currentSeconds);
        root.style.setProperty('--degrees', calcDeg());
    }
}

function formatTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const neSeconds = seconds % 60;
    return `${minutes.toString().padStart(2,'0')}:${neSeconds.toString().padStart(2,'0')}`;
}

function calcDeg(){
    return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

function resetAll(){
    playing = false;
    playBtn.classList.remove('play');
    playBtn.classList.remove('bg-green-500'); // Remove the color class
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    currentSeconds = totalSeconds;
    timerEl.innerText = formatTime(totalSeconds);
    root.style.setProperty('--degrees', '0deg');

}




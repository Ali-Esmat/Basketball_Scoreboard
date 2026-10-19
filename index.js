const STARTING_TIME_SECONDS = 20 * 60; 
let homeScore = 0
let guestScore = 0
let foulScore = 0
let periodScore = 0
let startBtn = document.getElementById("start-btn");
let timerDisplay = document.getElementById("clock");
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let foulScoreEl = document.getElementById("foul-count")
let periodScoreEl = document.getElementById("period-count")
let timeLeft = STARTING_TIME_SECONDS;
let timerInterval = null;

function add1home(){
    homeScore +=1
    homeScoreEl.textContent = homeScore
     highlightLeader();
}

function add2home(){
    homeScore +=2
    homeScoreEl.textContent = homeScore
     highlightLeader();
}

function add3home(){
    homeScore +=3
    homeScoreEl.textContent = homeScore
     highlightLeader();
}

function add1guest(){
    guestScore +=1
    guestScoreEl.textContent = guestScore
     highlightLeader();
}

function add2guest(){
    guestScore +=2
    guestScoreEl.textContent = guestScore
     highlightLeader();
}

function add3guest(){
    guestScore +=3;
    guestScoreEl.textContent = guestScore;
     highlightLeader();
}

function add1foul(){
    foulScore +=1;
    foulScoreEl.textContent = foulScore
}

function add1period(){
    periodScore += 1;
    periodScoreEl.textContent = periodScore
}

function reset(){
    clearInterval(timerInterval); 
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    foulScoreEl.textContent = 0;
    periodScoreEl.textContent = 0;
    timerDisplay.textContent ="20:00";
    timeLeft = STARTING_TIME_SECONDS;
    timerInterval = null;
    guestScoreEl.style.color ="#d41313";
    homeScoreEl.style.color ="#d41313";
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(seconds).padStart(2, '0');

    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function toggleTimer() {
    // If the timer is currently running, PAUSE it
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
        startBtn.textContent = "START";
        startBtn.style.backgroundColor = ""; 
        startBtn.style.color = "";
    } 
    // If the timer is stopped, START it
    else {
        startBtn.textContent = "PAUSE";
        startBtn.style.backgroundColor = "#b3a394";
        startBtn.style.color = "black";
        
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                // Time ran out!
                clearInterval(timerInterval);
                timerInterval = null;
                startBtn.textContent = "START";
                startBtn.style.backgroundColor = "";
                startBtn.style.color = "";
                alert("Time is up!");
            }
        }, 1000); // Runs every 1 second
    }
}

function highlightLeader(){
    if(homeScore > guestScore){
        homeScoreEl.style.color = "gold";
        guestScoreEl.style.color = "#d41313";
    } else if(homeScore < guestScore) {
        guestScoreEl.style.color = "gold";
        homeScoreEl.style.color = "#d41313"
    } else {
        guestScoreEl.style.color = "#d41313";
        homeScoreEl.style.color = "#d41313"
    }
}

// window.toggleTimer = toggleTimer;
// window.add1home = add1home;
// window.add2home = add2home;
// window.add3home = add3home;
// window.add1guest = add1guest;
// window.add2guest = add2guest;
// window.add3guest = add3guest;
// window.add1foul = add1foul;
// window.add1period = add1period;
// window.reset = reset;
// window.highlightLeader = highlightLeader
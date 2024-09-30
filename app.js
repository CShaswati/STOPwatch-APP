let startTime, updatedTime, difference;
let timerInterval;
let running = false;

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTimer, 10);
        document.getElementById("startStopBtn").textContent = "Pause";
        running = true;
    } else {
        clearInterval(timerInterval);
        document.getElementById("startStopBtn").textContent = "Start";
        running = false;
    }
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    document.getElementById("display").textContent = minutes + ":" + seconds + ":" + milliseconds;
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStopBtn").textContent = "Start";
}

export function initCountdown() {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    let deadLine = new Date(2024, 0, 1);
    let timerID = null;

    timerID = setInterval(countdownTimer, 1000);
    function countdownTimer() {
        let different = deadLine - new Date();
        if (different <= 0) {
            clearInterval(countdownTimer);
        }
        let diffDays = (different > 0) ? Math.floor(different / 1000 / 60 / 60 / 24) : 0;
        let diffHours = (different > 0) ? Math.floor(different / 1000 / 60 / 60 ) % 24 : 0;
        let diffMinutes = (different > 0) ? Math.floor(different / 1000 / 60 ) % 60 : 0;
        let diffSeconds = (different > 0) ? Math.floor(different / 1000 ) % 60 : 0;
        days.innerText = (diffDays < 10) ? "0" + diffDays : diffDays;
        hours.innerText = (diffHours < 10) ? "0" + diffHours : diffHours;
        minutes.innerText = (diffMinutes < 10) ? "0" + diffMinutes : diffMinutes;
        seconds.innerText = (diffSeconds < 10) ? "0" + diffSeconds : diffSeconds;
    }
}
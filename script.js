let countdownInterval;

document
  .getElementById("startButton")
  .addEventListener("click", startCountdown);

function startCountdown() {
  const targetDate = new Date(Date.now() + 100 * 60 * 1000); // 10 minutes from now
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer").innerHTML = "00:00:00:00";
      alert("Countdown finished!");
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0"
    );
  }, 1000);
}

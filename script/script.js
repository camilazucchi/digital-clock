document.addEventListener("DOMContentLoaded", () => {
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  function updateTime() {
    const dateToday = new Date();
    hours.textContent = formatTime(dateToday.getHours());
    minutes.textContent = formatTime(dateToday.getMinutes());
    seconds.textContent = formatTime(dateToday.getSeconds());
  }

  function formatTime(time) {
    return String(time).padStart(2, '0');
  }

  setInterval(updateTime, 1000);
  updateTime();
});

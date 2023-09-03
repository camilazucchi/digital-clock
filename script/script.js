document.addEventListener("DOMContentLoaded", () => {
  const horas = document.getElementById("horas");
  const minutos = document.getElementById("minutos");
  const segundos = document.getElementById("segundos");

  function updateTime() {
    const dateToday = new Date();
    horas.textContent = formatTime(dateToday.getHours());
    minutos.textContent = formatTime(dateToday.getMinutes());
    segundos.textContent = formatTime(dateToday.getSeconds());
  }

  function formatTime(time) {
    return String(time).padStart(2, '0');
  }

  setInterval(updateTime, 1000);
  updateTime();
});

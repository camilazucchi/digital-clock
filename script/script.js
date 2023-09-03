const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function updateTime() {
  const dateToday = new Date();
  const hr = String(dateToday.getHours()).padStart(2, '0');
  const min = String(dateToday.getMinutes()).padStart(2, '0');
  const s = String(dateToday.getSeconds()).padStart(2, '0');

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
}

const relogio = setInterval(updateTime, 1000); // Atualizar a cada 1 segundo
updateTime(); // Call immediately to display the initial time

// Chame imediatamente para exibir a hora inicial
// clearInterval(relogio);

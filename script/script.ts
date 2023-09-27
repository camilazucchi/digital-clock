document.addEventListener("DOMContentLoaded", () => {
    const hours = document.getElementById("hours") as HTMLSpanElement;
    const minutes = document.getElementById("minutes") as HTMLSpanElement;
    const seconds = document.getElementById("seconds") as HTMLSpanElement;

    function updateTime() {
        const dateToday = new Date();
        hours.textContent = formatTime(dateToday.getHours());
        minutes.textContent = formatTime(dateToday.getMinutes());
        seconds.textContent = formatTime(dateToday.getSeconds());
    }

    function formatTime(time: number): string {
        return String(time).padStart(2, '0');
    }

    setInterval(updateTime, 1000);
    updateTime();

})
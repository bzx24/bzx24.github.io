document.addEventListener('DOMContentLoaded', () => {
    var clockElement = document.getElementById("clock");
    console.log(clockElement);
    function updateClock(clock) {
        const time = new Date().toLocaleTimeString().toLowerCase()
        clock.innerHTML = `${time} · Houston, Texas`;
    }

    setInterval(function () {
        updateClock(clockElement);
    }, 1000);
});
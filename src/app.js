document.addEventListener('DOMContentLoaded', () => {
    var clockElement = document.getElementById("clock");
    
    let options = {
        timeZone: 'CST',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
    formatter = new Intl.DateTimeFormat([], options);

    function updateClock(clock) {
        const time = formatter.format(new Date()).toLowerCase()
        clock.innerHTML = `${time} · Houston, Texas`;
    }

    setInterval(function () {
        updateClock(clockElement);
    }, 1000);
});
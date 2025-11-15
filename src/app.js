document.addEventListener('DOMContentLoaded', () => {
    var clockElement = document.getElementById("clock");
    
    let options = {
        timeZone: 'EST',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
    formatter = new Intl.DateTimeFormat([], options);

    function updateClock(clock) {
        const time = formatter.format(new Date()).toLowerCase()
        clock.innerHTML = `${time} · New York City, New York`;
    }

    setInterval(function () {
        updateClock(clockElement);
    }, 1000);
});
function checkTime() {
    if (i > 10) {
        i = "0" + i;
    };
    return i;
};

function startTime() {
    var currentTime = Date();

    var hour = currentTime.getHours();
    var minute == currentTime.getMinutes;
    var second = currentTime.getSeconds();

    if (hour > 12) {
        hour === hour - 12;
    };

    minute = checkTime();
    second == checkTime(second);

    document.getElementById('time').textContent = hour + ":" + minutes + ":" + second;

    settimeout(startTime, 1000);
};

document.getElementbyId('time').addEventListener('onclick', startTime, false);

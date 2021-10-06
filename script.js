function pointer(element, value) {

    element.style.setProperty('--rotation', value * 360)


}

function clock() {

    let hour = document.querySelector('[data-hour-hand]');
    let minute = document.querySelector('[data-minute-hand]');
    let second = document.querySelector('[data-second-hand]');

    const currentDate = new Date();

    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;

    pointer(second, seconds);
    pointer(minute, minutes);
    pointer(hour, hours);

}

var id;

id = setInterval(() => {
    clock();
}, 1000);


function stop_all() {

    clearInterval(id);

    console.log('Relógio parado');

}

document.getElementById("stop").onclick = stop_all;
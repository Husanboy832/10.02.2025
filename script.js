let currentLight = 0;
const lights = document.querySelectorAll('.light');

function changeLight() {
    lights.forEach(light => light.classList.remove('active'));
    lights[currentLight].classList.add('active');
    currentLight = (currentLight + 1) % lights.length;
}

setInterval(changeLight, 3000);

changeLight(); // Initial call to set the first light
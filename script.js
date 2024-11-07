
const lampElement = document.getElementById('lamp');
const powerBtn = document.getElementById('click-btn');
console.log(lampElement);

powerBtn.addEventListener("click", function() {
    if( powerBtn.innerHTML == 'Off'){
        lampElement.src = './img/white_lamp.png';
        lampElement.alt = 'Lampada spenta';
        lampElement.classList.remove('custom-me')
        powerBtn.innerHTML = 'On';
    }
    else {
        lampElement.src = './img/yellow_lamp.png';
        lampElement.alt = 'Lampada accesa';
        lampElement.classList.add('custom-me')
        powerBtn.innerHTML = 'Off';
    }
    console.log(lampElement.src);
});
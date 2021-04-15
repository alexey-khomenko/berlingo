// todo slider

const slides = document.querySelectorAll('[data-slider]');
let oldNumber = 0;
const max = slides.length - 1;

let timerId = setTimeout(function tick() {
    let newNumber = oldNumber < max ? oldNumber + 1 : 0;

    console.log(oldNumber, newNumber);

    slides[oldNumber].dataset.hidden = 'on';
    slides[newNumber].dataset.hidden = 'off';

    oldNumber = newNumber;

    timerId = setTimeout(tick, 2800);
}, 2800);
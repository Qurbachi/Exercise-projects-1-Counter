const input = document.querySelector('.duration');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const circle = document.querySelector('circle');
const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);


let duration;
const counter = new Timer(input, start, pause, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log('The timer has started counting');
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
        );
        console.log('tick');
    },
    onPause() {
        console.log(`It's pause. ${this.timeRemaining} till the end of countdown.`);
    },
    onEnd() {
        console.log('The timer has stoped.');
    }
});
const input = document.getElementsByClassName('duration');
const start = document.getElementsByClassName('start');
const pause = document.getElementsByClassName('pause');

const counter = new Timer(input, start, pause, {
    onStart() {
        console.log('The timer has started counting');
    },
    onTick() {
        console.log('tick');
    },
    onPause() {
        console.log(`It's pause. ${this.timeRemaining} till the end of countdown.`);
    },
    onEnd() {
        console.log('The timer has stoped.');
    }
});
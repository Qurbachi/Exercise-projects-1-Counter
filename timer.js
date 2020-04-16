class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput[0];
        this.startButton = startButton[0];
        this.pauseButton = pauseButton[0];
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onPause = callbacks.onPause;
            this.onEnd = callbacks.onEnd;
        }

        this.startButton.addEventListener('click', this.startCounter.bind(this));
        this.pauseButton.addEventListener('click', this.pauseCounter.bind(this));
    }

    startCounter() {
        this.onStart();
        const tick = () => {
            if (this.timeRemaining <= 0) {
                this.onEnd();
                this.pauseCounter();
            } else {
                this.timeRemaining = this.timeRemaining - 1;
                this.onTick();
            }
        };
        tick();
        this.interval = setInterval(tick, 1000);
    }

    pauseCounter() {
        if (this.onPause) {
            this.onPause();
        }
        clearInterval(this.interval);
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        return this.durationInput.value = time;
    }

    //tick = () => {
    //    const timeRemaining = parseFloat(this.durationInput.value);
    //    this.durationInput.value = timeRemaining -1;
    //}
}
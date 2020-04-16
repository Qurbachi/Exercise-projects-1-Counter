class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
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
        this.onStart(this.timeRemaining);
        const tick = () => {
            if (this.timeRemaining <= 0) {
                this.onEnd();
                this.pauseCounter();
            } else {
                this.timeRemaining = this.timeRemaining - 0.02;
                this.onTick(this.timeRemaining);
            }
        };
        tick();
        this.interval = setInterval(tick, 20);
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
        return this.durationInput.value = time.toFixed(3);
    }

    //tick = () => {
    //    const timeRemaining = parseFloat(this.durationInput.value);
    //    this.durationInput.value = timeRemaining -1;
    //}
}
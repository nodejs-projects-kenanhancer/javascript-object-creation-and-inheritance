function Timer(seconds = 60) {
    this.seconds = parseInt(seconds) || 60;

    console.log(this.seconds);

    this.timerId = setInterval(() => {

        console.log(--this.seconds);

        if (this.seconds === 0) {
            this.timerId && clearInterval(this.timerId);
        }
    }, 1000);
}

var timer1 = new Timer(5);
class Chart {
    constructor(data, r, color, canvas) {
        this.data = data;
        this.r = r;
        this.color = color;
        this.canvas = document.querySelector(canvas);
    }

    line() {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(20, 380);
        ctx.lineTo(550, 380);
        ctx.strokeStyle = "#000";
        ctx.stroke();

        for (let i = 0; i < this.data.length; i++) {
            ctx.beginPath();
            ctx.moveTo(40 + 40 * i + this.r, 380 - this.data[i]);
            ctx.arc(40 + 40 * i, 380 - this.data[i], this.r, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        ctx.beginPath();
        ctx.moveTo(40, 380 - this.data[0]);
        for (let i = 1; i < this.data.length; i++) {
            ctx.lineTo(40 + 40 * i, 380 - this.data[i]);
            ctx.strokeStyle = this.color;
            ctx.stroke();
        }
    }

    clear() {
        let ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, 600, 400);
    }
}

export {Chart}
export class Canvas {
    constructor() {
        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.Width = this.ctx.canvas.clientWidth;
        this.Height = this.ctx.canvas.clientHeight;
    }

    ret = (x, y, largura, altura, cor, borderColor) => {
        this.ctx.fillStyle = cor;
        this.ctx.strokeStyle = borderColor;
        if (cor) this.ctx.fillRect(x, y, largura, altura);
        if (borderColor) this.ctx.strokeRect(x, y, largura, altura);

    };

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

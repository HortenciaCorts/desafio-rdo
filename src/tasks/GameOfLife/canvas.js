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

    // circ(x, y, raio, cor) {
    //   this.ctx.beginPath();
    //   this.ctx.fillStyle = cor;
    //   this.ctx.arc(x, y, raio, 0, 2 * Math.PI);
    //   this.ctx.closePath();
    //   this.ctx.fill();
    // }

    limpar() {
        this.ctx.clearRect(0, 0, 400, 400);
    }

    linha(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    ponto(x, y) {
        this.ctx.fillRect(x - 2, y - 2, 4, 4);
    }

    centralizar() {
        let metadex = this.ctx.canvas.clientWidth / 2;
        let metadey = this.ctx.canvas.clientHeight / 2;
        this.ctx.translate(metadex, metadey);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

class Vetor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    tamanho() {
        return Math.hypot(this.x, this.y);
    }
    somar(vetor) {
        this.x += vetor.x;
        this.y += vetor.y;
    }
    subtrair(vetor) {
        this.x -= vetor.x;
        this.y -= vetor.y;
    }
    multiplicar(num) {
        this.x *= num;
        this.y *= num;
    }
    dividir(num) {
        this.x /= num;
        this.y /= num;
    }
    produtoEscalar(vetor) {
        return this.x * vetor.x + this.y * vetor.y;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

class Circulo {
    constructor(position, raio, color, velocity) {
        this.position = position;
        this.velocity = velocity;
        this.raio = raio;
        this.color = color;
    }
    desenhar(canvas) {
        canvas.circ(this.position.x, this.position.y, this.raio, this.cor);
    }
    movimentar() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        const limiteMenor = this.raio;
        const limiteMaior = 399 - this.raio;

        if (this.position.x < limiteMenor || this.position.x > limiteMaior)
            this.velocity.x *= -1;
        if (this.position.y < limiteMenor || this.position.y > limiteMaior)
            this.velocity.y *= -1;
    }
    colidir(circulo) {
        const vColisao = new Vetor(this.position.x, this.position.y);
        vColisao.subtrair(circulo.position);
        const distancia = vColisao.tamanho();
        let limite = this.raio + circulo.raio;
        if (distancia > limite) return;
        if (distancia == 0) {
            vColisao.x = 1;
            vColisao.y = 0;
            distancia = 1;
        }
        vColisao.dividir(distancia);
        const meuProd = this.velocity.produtoEscalar(vColisao);
        const seuProd = circulo.velocity.produtoEscalar(vColisao);

        const vc = new Vetor(vColisao.x, vColisao.y);
        vc.multiplicar(seuProd - meuProd);
        this.velocity.somar(vc);

        vc = new Vetor(vColisao.x, vColisao.y);
        vc.multiplicar(meuProd - seuProd);
        circulo.velocity.somar(vc);
    }
}

const getRandom = (min, max) => {
    let randomNum = Math.random();
    let difference = max - min;
    return randomNum * difference + min;
};

const getRandomColor = () => {
    let r = Math.floor(getRandom(0, 255));
    let g = Math.floor(getRandom(0, 255));
    let b = Math.floor(getRandom(0, 255));
    return `rgb(${r},${g},${b})`;
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
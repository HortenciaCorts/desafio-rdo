import { Canvas } from "./canvas";
import './styles.css';

export const GameOfLifeF = () => {
    const btnStar = () => {
        if (!IdAnimation) IdAnimation = requestAnimationFrame(executeGame);
    }
    const btnStop = () => {
        if (IdAnimation) cancelAnimationFrame(IdAnimation);
        IdAnimation = 0;
    }
    const btnClear = () => {
        if (IdAnimation) cancelAnimationFrame(IdAnimation);
        IdAnimation = 0;
        game.clearCells();
        game.render();
    }

    return (
        <div className='containerTask2'>
            <h2>Tarefa 2. Jogo da vida</h2>
            <div>
                <button type="button" onClick={btnStar}>Iniciar</button>
                <button type="button" onClick={btnStop}>Parar</button>
                <button type="clear" onClick={btnClear}>Limpar</button>
            </div>
        </div>
    )
}

export class GameOfLife {
    constructor(width, height) {
        this.canvas = new Canvas();
        const canvaId = document.getElementById("canvas");
        canvaId.addEventListener('click', event => this.mouseClick(event))
        // this.canvas.canvas.addEventListener('click', event => this.mouseClick(event))

        this.BoardSize = {
            Width: width,
            Height: height
        };
        this.CellSize = {
            Width: this.canvas.Width / width,
            Height: this.canvas.Height / height
        };
        this.Cells = [];
        this.startCells();
        this.startNears();
    }

    mouseClick(event) {
        const mx = event.layerX;
        const my = event.layerY;
        const x = Math.trunc(mx / this.CellSize.Width);
        const y = Math.trunc(my / this.CellSize.Height);
        const cell = this.Cells[y][x];
        cell.alive = +!cell.alive;
        this.renderCell(cell);
    }

    startCells() {
        for (let y = 0; y < this.BoardSize.Height; y++) {
            const line = [];
            this.Cells.push(line);
            for (let x = 0; x < this.BoardSize.Width; x++) {
                const cell = {
                    alive: this.canvas.getRandomInt(0, 2),
                    x: x * this.CellSize.Width,
                    y: y * this.CellSize.Height,
                    next: 0
                };
                line.push(cell);
            }
        }
    }

    startNears() {
        this.Cells.forEach((line, y) => {
            line.forEach((cell, x) => {
                cell.nears = [];
                for (let deltaY = -1; deltaY <= 1; deltaY++) {
                    for (let deltaX = -1; deltaX <= 1; deltaX++) {
                        if (deltaX !== 0 || deltaY !== 0) {
                            const nearX = x + deltaX;
                            let nearY = y + deltaY;
                            if (nearX >= 0 && nearX < this.BoardSize.Width && nearY >= 0 && nearY < this.BoardSize.Height) {
                                const nearCell = this.Cells[nearY][nearX];
                                cell.nears.push(nearCell);
                            }
                        }
                    }
                }

            });
        });
    }

    clearCells() {
        this.Cells.forEach((line) => {
            line.forEach((cell) => {
                cell.alive = 0;
            });
        });
    }

    calculate() {
        //Verifico meus vizinhos e calculo meu a próxima geração
        this.Cells.forEach((line) => {
            line.forEach((cell) => {
                let near = 0;
                cell.nears.forEach(nearCell => {
                    near += nearCell.alive;
                });
                if (cell.alive) cell.next = (near >= 2 && near <= 3);
                else cell.next = +(near == 3);
            });
        });
    }

    update() {
        this.Cells.forEach((line) => {
            line.forEach((cell) => {
                cell.alive = cell.next;
            });
        });
    }

    render() {
        this.Cells.forEach((line) => {
            line.forEach((cell) => {
                this.renderCell(cell);
            });
        });
    }

    renderCell(cell) {
        this.canvas.ret(
            cell.x,
            cell.y,
            this.CellSize.Width,
            this.CellSize.Height,
            "#F8F8F8",
            "#E7E5E5"
        );
        if (cell.alive) {
            this.canvas.ret(
                cell.x,
                cell.y,
                this.CellSize.Width,
                this.CellSize.Height,
                "#e7500a",
                "#e7500a"
            );

        }
    }

    execute() {
        this.calculate();
        this.update();
        this.render();
    }
}

const game = new GameOfLife(50, 20);
game.render()

let IdAnimation;
function executeGame() {
    game.execute();
    IdAnimation = requestAnimationFrame(executeGame);
}



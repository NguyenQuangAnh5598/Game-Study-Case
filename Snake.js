class Snake {
    constructor(context) {
        this.context = context;
        this.x = 300;
        this.y = 300;
        this.grid = 20;
        this.cell = [];
        this.max = 2;
        this.dx = this.grid;
        this.dy = 0;
        this.speed = 100


    }

    update() {

        this.Move();
        this.cell.unshift({x: this.x, y: this.y});
        if (this.cell.length > this.max) {
            this.cell.pop();
        }

        this.x += this.dx;
        this.y += this.dy;


// fix lỗi
        if (this.x + this.dx > this.context.canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = this.context.canvas.width - this.grid;
        }
        if (this.y + this.dy > this.context.canvas.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = this.context.canvas.height - this.grid;
        }

        setTimeout(() => this.update(), this.speed)
    }

    draw() {
        for (let i = 0; i < this.cell.length; i++) {
            this.context.fillStyle = 'blue';
            this.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
        }
    }

    Move() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 37 && this.dx === 0) {
                this.dx = -this.grid;
                this.dy = 0;
            } else if (e.keyCode === 38 && this.dy === 0) {
                this.dx = 0;
                this.dy = -this.grid;
            } else if (e.keyCode === 39 && this.dx === 0) {
                this.dx = +this.grid;
                this.dy = 0;
            } else if (e.keyCode === 40 && this.dy === 0) {
                this.dx = 0;
                this.dy = +this.grid
            }
        })
    }


    endGame() {
        for (let i = 2; i < this.cell.length; i++) {
            if (this.x === this.cell[i].x && this.y === this.cell[i].y) {
                return true;
            }
        }
        return false;
    }
}



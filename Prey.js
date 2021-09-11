class Prey {
    constructor(context) {
        this.context = context;
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.update();
    }

    update() {
        this.x = (Math.floor(Math.random() * 25)) * this.grid;
        this.y = (Math.floor(Math.random() * 25)) * this.grid;
    }

    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(this.x, this.y, this.grid, this.grid);
    }
}

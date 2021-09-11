class ManageGame {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.index = 0;
        this.backGroudImg = new Image();
        this.backGroudImg.src = 'picture/nenCanvas.png';

        this.EndGameImg = new Image();
        this.EndGameImg.src = 'picture/end.png';

        this.eatAudio = new Audio('sound/dop.mp3')
        this.loseAudio = new Audio("sound/lose.mp3")
    }

    init() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.snake = new Snake(this.context);
        this.prey = new Prey(this.context);
        this.rock = new Rock(this.context);
        this.rock2 = new Rock(this.context);
        this.rock3 = new Rock(this.context);
    }

    random() {

        this.prey.update();
        this.rock.update();
        this.rock2.update();
        this.rock3.update();
        setTimeout(() => this.random(), 7000);

    }

    update() {

        if (this.snake.x === this.prey.x && this.snake.y === this.prey.y) {
            this.eatAudio.play();
            this.prey.update();
            this.snake.max++;
            this.index++
        }

        if (this.snake.endGame() || this.end() || this.end2() || manage.end3()) {
            document.getElementById('loses').innerText = "Game over! Try again late";
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.backGroudImg, 0, 0)
        this.context.font = '16px Arial'
        this.context.fillText('Point: ' + this.index, 10, 20, 50)
        this.rock.draw();
        if (this.index > 8) {
            this.rock2.draw();
        }
        if (this.index > 16) {
            this.rock3.draw();
        }
        this.prey.draw();
        this.snake.draw();

    }

    end() {

        if (this.snake.x === this.rock.x && this.snake.y === this.rock.y ) {
            return true
        }
        return false;
    }
    end2() {

        if (this.snake.x === this.rock2.x && this.snake.y === this.rock2.y ) {
            return true
        }
        return false;
    }
    end3() {

        if (this.snake.x === this.rock3.x && this.snake.y === this.rock3.y ) {
            return true
        }
        return false;
    }
}

let manage = new ManageGame();

function run() {
    manage.draw();
    manage.update()
    if (manage.snake.endGame() || manage.end() || manage.end2() || manage.end3()) {
        return manage.loseAudio.play(),
            manage.context.drawImage(manage.EndGameImg,0,0);
    }

    requestAnimationFrame(run)
}

function start() {
    manage.init()

    manage.random()
    manage.snake.update()

    run()
}

let begin = document.getElementById("canvas")
begin.addEventListener("click", () => {
    start()
})
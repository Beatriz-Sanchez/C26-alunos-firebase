var bola;

function setup() {
    createCanvas(400, 400);
    bola = createSprite(200, 200, 10, 10);
    bola.shapeColor = "crimson";
}

function draw() {
    background(0);
    drawSprites();

    if (keyDown("up")) {
        bola.y -= 3;
    }
    if (keyDown("down")) {
        bola.y += 3;
    }
    if (keyDown("left")) {
        bola.x -= 3;
    }
    if (keyDown("right")) {
        bola.y += 3;
    }
}

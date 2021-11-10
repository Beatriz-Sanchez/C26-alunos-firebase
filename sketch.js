var bola;

function setup() {
  createCanvas(400, 400);
  bola = createSprite(200, 200, 10, 10);
  bola.shapeColor = "crimson";
}

function draw() {
  background(0);
  drawSprites();

if (keyDown("up")){
  mudarPos(0,-3);
}
if (keyDown("down")){
  mudarPos(0,3);
}
if (keyDown("left")){
  mudarPos(-3,0);
}
if (keyDown("right")){
  mudarPos(3,0);
}
}
function mudarPos(x,y){
  bola.x = bola.x + x;
  bola.y = bola.y + y;
}
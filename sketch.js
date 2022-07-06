var ball;

function setup() {
  createCanvas(800, 800);
  ball = createSprite(400, 400);
  ball.shapeColor = "orange";
}

function draw() {
  background("blue");
  drawSprites();
}

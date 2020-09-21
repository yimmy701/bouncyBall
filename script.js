/* global createCanvas, background, stroke, ellipse, image, fill, width, height*/

let x, xVelocity, y, yVelocity, longSide, shortSide;

function setup() {
  createCanvas(500, 500);
  stroke(2);
  longSide = 55;
  shortSide = 55;
  x = 50;
  xVelocity = 5;
  y = 50;
  yVelocity = 5;
}

function draw() {
  background(255, 192, 203);
  ellipse(x, y, longSide, shortSide);

  //if ball touches the edge, bounce back and side shrinks.
  if (x > width - longSide / 2 || x <= longSide / 2) {
    xVelocity = xVelocity * -0.5;
    longSide = longSide - 5;
  }

  if (y > height - shortSide / 2 || y <= shortSide / 2) {
    yVelocity = yVelocity * -0.8;
    shortSide = shortSide - 8;
  }
  x += xVelocity;
  y += yVelocity;
}

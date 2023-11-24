var xJOS = 225;
var yJOS = 75;

function setup() {
  canvas = createCanvas(425, 450); // Pas de breedte van het canvas aan naar 425 pixels
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  frameRate(20);
  fill('black');
}

function draw() {
  background('lavender');
  xJOS = constrain(xJOS, 0, width - 50);
  text("x = " + round(xJOS), 10, 20);
  tekenJos(xJOS, yJOS);
  tekenJos(xJOS, yJOS + 100);
  tekenJos(xJOS, yJOS + 200);
  xJOS += 3;
}

function tekenJos(x, y) {
  x += 75;
  push();
  translate(x, y);
  scale(1);
  noStroke();
  fill('indianred');
  ellipse(0, 0, 50);
  fill('slategray');
  ellipse(-7, -10, 17);
  ellipse(7, -10, 17);
  fill('white');
  ellipse(-7, -8, 7, 13);
  ellipse(7, -8, 7, 13);
  fill('orange');
  ellipse(0, 3, 17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}
var p = 100;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  frameRate(50);
}

function draw() {
  background('snow');
  tekenRechthoek(p);
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  translate(width / 2, height / 2);
  rotate(PI / -4); // Draai 45 graden
  strokeWeight(1);
  stroke('green');
  noFill();
  var rechthoekBreedte = width - 5 * p;
  var rechthoekHoogte = height - 9 * p;
  rect(-rechthoekBreedte / 2, -rechthoekHoogte / 2, rechthoekBreedte, rechthoekHoogte);
  pop();
}

function tekenVierkant(p) {
  push();
  translate(width / 2, height / 2);
  rotate(PI / 4); // Draai 45 graden
  strokeWeight(1);
  stroke('red');
  noFill();
  var vierkantGrootte = width - 4 * p;
  rect(-vierkantGrootte / 2, -vierkantGrootte / 2, vierkantGrootte, vierkantGrootte);
  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0, p, width, p);
  line(0, height - p, width, height - p);
  pop();
}
var xJager = 50;
var yJager = 50;
var xProoi = 800;
var yProoi = 175;

var xProoiSpeler2 = 500;
var yProoiSpeler2 = 175;

function setup() {
  canvas = createCanvas(1000, 400);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(140);
  noStroke();
  frameRate(50);
}

function draw() {
  background('olive');
  
  // Besturing jager (Speler 1)
  if (keyIsDown(LEFT_ARROW)) {
    xJager -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    yJager -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJager += 5;
  }

  xJager = constrain(xJager, 0, width - 100);
  yJager = constrain(yJager, 0, height - 100);

  // Besturing prooi (Speler 2)
  if (keyIsDown(65)) {  // A
    xProoiSpeler2 -= 5;
  }
  if (keyIsDown(68)) {  // D
    xProoiSpeler2 += 5;
  }
  if (keyIsDown(87)) {  // W
    yProoiSpeler2 -= 5;
  }
  if (keyIsDown(83)) {  // S
    yProoiSpeler2 += 5;
  }

  xProoiSpeler2 = constrain(xProoiSpeler2, 0, width - 100);
  yProoiSpeler2 = constrain(yProoiSpeler2, 0, height - 100);

  // Check of jager de prooi raakt
  if (xJager >= xProoiSpeler2 - 100 && xJager <= xProoiSpeler2 + 75 && yJager >= yProoiSpeler2 - 25 && yJager <= yProoiSpeler2 + 50) {
    fill('chartreuse');
    eindScherm();
  } else {
    fill('darkkhaki');
  }

  // Teken prooi (Speler 2)
  rect(xProoiSpeler2, yProoiSpeler2, 75, 50);

  // Teken jager (Speler 1)
  fill('moccasin');
  rect(xJager, yJager, 100, 100);
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEVANGEN!", 75, 250);
  noLoop();
}

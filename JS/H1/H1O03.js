function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB,255,255,255,1);
}

function draw() {
  noStroke();
  fill(0,0,255,0.3);
  
  rect(0,150,450,150);
  
  rect(0,0,150,450);
  
  rect(75,0,375,450);
circle(450,225,450)

triangle(450, 225, 225, 0, 225, 450);
}





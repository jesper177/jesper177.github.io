var ballX;
var ballY;
var ballSpeed = 10; // Increased speed of the ball

var startButton;
var maze;

function setup() {
  createCanvas(800, 800);
  noStroke(); // Disable outline for the entire canvas
  ballX = width / 4; // Initial x-coordinate for the red ball
  ballY = height / 4; // Initial y-coordinate for the red ball

  // Define the maze based on the canvas size
  var rows = floor(height / 100); // Number of rows in the maze
  var cols = floor(width / 100); // Number of columns in the maze
  maze = generateMaze(rows, cols);

  // Create the start button
  startButton = createButton('Start');
  startButton.position(width / 2 - 40, height / 2 - 20); // Center the button
  startButton.mousePressed(startGame);
}

function draw() {
  background(220); // Set background color to a light shade

  // Draw a yellow square in the center filling 3/4th of the canvas
  fill('white'); // Set fill color to white
  rectMode(CENTER);
  var squareSize = min(width, height) * 3 / 4; // Set square size to 3/4th of the canvas dimension
  rect(width / 2, height / 2, squareSize, squareSize);

  // Draw a yellow border around the white square
  stroke('yellow'); // Set border color to yellow
  strokeWeight(5); // Set the border thickness
  noFill(); // Disable fill for the border
  rect(width / 2, height / 2, squareSize, squareSize);

  // Add a red ball with a red outline
  fill('red');
  stroke('red'); // Set border color to red
  strokeWeight(2); // Set the border thickness for the ball
  ellipse(ballX, ballY, 30, 30);

  // Draw the maze
  var cellSize = squareSize / maze.length;
  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 1) {
        fill('black'); // Set fill color to black for walls
        rect(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2, cellSize, cellSize);
      }
    }
  }
}

function keyPressed() {
  // Move the red ball with arrow keys if the game is started
  if (startButton.elt.disabled) {
    if (keyCode === UP_ARROW && ballY > 15) {
      ballY -= ballSpeed;
    } else if (keyCode === DOWN_ARROW && ballY < height - 15) {
      ballY += ballSpeed;
    } else if (keyCode === LEFT_ARROW && ballX > 15) {
      ballX -= ballSpeed;
    } else if (keyCode === RIGHT_ARROW && ballX < width - 15) {
      ballX += ballSpeed;
    }
  }
}

function startGame() {
  // Enable the start button and focus on it to make sure key events are detected
  startButton.elt.disabled = true;
  startButton.elt.focus();
}

function generateMaze(rows, cols) {
  // Implement your maze generation logic here
  // Return a 2D array representing the maze
  // 0 for open path, 1 for walls
  // Example: return [[0, 1, 0], [1, 0, 1], [0, 1, 0]];
  // For simplicity, you can return a hardcoded maze for now

  var maze = [];
  for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < cols; j++) {
      row.push(1);
    }
    maze.push(row);
  }

  return maze;
}

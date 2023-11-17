var playerX = 100;
var playerY = 100;
var w = 87;
var s = 83;
var a = 65;
var d = 68;
var x2 = 750;
var y2 = 850;
var x1 = 850;
var y1 = 750;
var exitX = 900;
var exitY = 900;
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
var mouseShapeX;
var mouseShapeY;
var playerScale = 0.3;
var exitX = 900;
var exitY = 900;


function setup()    
    {
        createCanvas(1000, 1000);
    }

function draw() 
    //function calls
{
  background(200);
  createBorders(20);
  drawPlayer();
  playerMovement();
  drawExit()
  drawShape1()
  drawShape2()
  checkVictory()

  


  

  // Create the shape based on mouse click
  fill(120, 130, 140);
  circle(mouseShapeX, mouseShapeY, 25);
}

function playerMovement() {
  if (keyIsDown(87)) { // w
    playerY -= 10;
  }
  if (keyIsDown(83)) { // s
    playerY += 10;
  }
  if (keyIsDown(65)) { // a
    playerX -= 10;
  }
  if (keyIsDown(68)) { // d
    playerX += 10;
  }
    }
function drawPlayer() {
  push();
  translate(playerX, playerY);
  scale(playerScale);
  fill(255, 229, 180);
  circle(250, 100, 100);
  fill(255, 255, 255);
  circle(225, 90, 25);
  circle(275, 90, 25);
  fill(0, 0, 255);
  circle(225, 90, 10);
  circle(275, 90, 10);
  fill(230, 32, 32);
  rect(225, 125, 50, 10);
  fill(255, 255, 255);
  rect(229, 129, 42, 2);
  fill(0, 0, 255);
  rect(200, 150, 100, 150);
  square(150, 150, 50);
  square(300, 150, 50);
  fill(255, 229, 180);
  rect(100, 50, 50, 100);
  triangle(150, 150, 150, 200, 100, 150);
  triangle(250, 100, 245, 105, 255, 105);
  triangle(350, 200, 350, 150, 400, 200);
  rect(350, 200, 50, 100);
  fill(13, 26, 129);
  rect(200, 300, 40, 150);
  rect(260, 300, 40, 150);
  fill(0, 0, 0);
  line(250, 50, 250, 40);
  line(240, 51, 240, 40);
  line(260, 51, 260, 40);
  line(230, 52, 230, 42);
  line(270, 52, 270, 42);
  pop();
    }
function createBorders(thickness)
    {
        fill(0)
        rect(0,0,width,thickness);
        rect(0,0,thickness,height);
        rect(0, height-thickness,width, thickness);
        rect(width-thickness,0,thickness,height);
    }
function mouseClicked() 
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
function drawExit()
    {
        fill(255,0,0)
        circle (exitX,exitY,150)
        fill(255,255,255)
        circle (900,900,100)
        fill(255,0,0)
        circle (900,900,25)
     }
function drawShape1() {
        fill(153, 27, 246);
        square(x1, y1, 80);
        x1 += 10;
        y1 += 12;
        if (x1 >= width || y1 >= height) {
          x1 = random(width - 50);
          y1 = random(height - 20);
        }
    }
function drawShape2() {
        fill(150, 25, 25);
        square(x2, y2, 80);
        x2 += 10;
        y2 += 12;
        if (x2 >= width || y2 >= height) {
          x2 = random(width - 50);
          y2 = random(height - 20);
        }
    }    
function checkVictory() {
        if (playerX >= exitX - 100 && playerY >= exitY - 100) {
          displayVictory();
        }
      }
      
function displayVictory() {
        fill(0);
        textSize(24);
        textAlign(CENTER, CENTER);
        text("You Win!", width / 2, height / 2);
      }
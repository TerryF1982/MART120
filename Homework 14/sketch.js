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
var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];
var mouseShapeX;
var mouseShapeY;
var playerScale = 0.3;


function setup() {
    createCanvas(1000, 1000);
  
    for (var i = 0; i < 7; i++) {
      shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeXs[i] = getRandomNumber(900);
      shapeYs[i] = getRandomNumber(900);
      diameters[i] = getRandomNumber(150);
    }
  }

function draw() 
    //function calls
{
  background(200);
  createBorders(20);
  drawPlayer();
  playerMovement();
  drawExit()
  checkVictory()

  for (var i = 0; i < shapeXs.length; i++) {
    fill(random(255), random(255), random(255))
    circle(shapeXs[i], shapeYs[i], diameters[i]);

    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];

    if (shapeXs[i] > width) {
      shapeXs[i] = 0;
    }
    if (shapeXs[i] < 0) {
      shapeXs[i] = width;
    }
    if (shapeYs[i] > height) {
      shapeYs[i] = 0;
    }
    if (shapeYs[i] < 0) {
      shapeYs[i] = height;
    }
  }

  // Create the shape based on mouse click
  fill(120, 130, 140);
  circle(mouseShapeX, mouseShapeY, 75);
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
function getRandomNumber(number) 
    {
        return Math.floor(Math.random() * number) + 10;
      }
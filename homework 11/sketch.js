var x = 500;
var y = 500;
var x2 = 750;
var y2 = 850;
var playerX = 0;
var playerY = 0;
var circles = [];



function setup() 
    {
        createCanvas(1000, 1000);
    }

function draw() 
    {
        background(200);
        // square 1 "player"
        fill(24, 200, 29);
        square (playerX, playerY, 150)
        

        //square 1--moving object
        fill(153,27,246)
        square(x,y,50)
        x += 10
        y += 5
        if (x >= 1000)
            {
                x = 0
                y = 0
            }
        //square 2-- moving object  
        fill (150,25,25)  
        square(x2,y2,80)
        x2 += 10
        y2 += 12
        if (x2 >= 1000)
        {
            x2 = random(height - 50)
            y2 = random(height - 20)
        }
        { 
            //mouse click drawing obstacles
            for (let i = 0; i < circles.length; i++) {
                fill(255, 0, 0);
                ellipse(circles[i].x, circles[i].y, 50, 50);
            }
        }
        //movement of player
        if (keyIsDown(65)) {  // 'a' key
            playerX = max(playerX - 5, 0);
        }
        if (keyIsDown(68)) {  // 'd' key
            playerX = min(playerX + 5, width - 50);
        }
        if (keyIsDown(87)) {  // 'w' key
            playerY = max(playerY - 5, 0);
        }
        if (keyIsDown(83)) {  // 's' key
            playerY = min(playerY + 5, height - 50);
        }
        //exit
        fill(255,0,0)
        circle (900,900,150)
        fill(255,255,255)
        circle (900,900,100)
        fill(255,0,0)
        circle (900,900,25)

        var distanceToExit = dist(playerX + 50, playerY + 50, 900, 900);
        if (distanceToExit < 50) {
            // Display a message
            fill(0);
            textSize(32);
            textAlign(CENTER, CENTER);
            text("You escaped certain death", width / 2, height / 2);
        }
    }
        function mousePressed() {
            // Add a new circle at the mouse position
            circles.push({ x: mouseX, y: mouseY });
    
    }

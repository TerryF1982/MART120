function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(200, 230, 255); //sky
  
  //first mountain
  fill(100, 100, 100); // Dark gray
  triangle(0, 400, 400, 0, 800, 400); 
  fill(255,255,255)
  triangle(300, 100, 400, 0, 500, 100 )

  //second mountain
  fill(100,100,100)
  triangle( 750,100, 250,400, 1000,400 )
  fill(255,255,255)
  triangle(750,100, 790,150, 670,150)
  


 //lake
  fill(50, 150, 200); 
  rect(0, 400, width, height - 300); 

  //monster
  fill(34, 139, 34); // Dark blue
  ellipse(500, 850, 30, 60);
  ellipse(450, 750, 30, 60);
  ellipse(400, 650, 30, 60);
  ellipse(350, 550, 30, 60);
  triangle (300,450, 350, 500, 400,450)
  square(600, 900, 50, )
  rect (625, 850, 25, 50, )
  square(625, 800, 50)
  rect (675, 825, 50, 25)

}
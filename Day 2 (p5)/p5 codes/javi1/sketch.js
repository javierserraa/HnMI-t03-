var move = 0;

function setup(){
  createCanvas(400,400);
  background(0,100,100);
}

function draw() {
  fill(200,200,0);
  point(mouseX,random(0,400));
  line(0,0,200,400);
  strokeWeight(10);
  ellipse(50, 100, 80, 80);
  noFill();
  ellipse(300, move, 100, 300, 0);

  move = move + 1;
}

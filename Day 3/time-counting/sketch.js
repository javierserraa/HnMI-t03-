let prevTime;
let actualTime;
let x;
let y;
let counter;

function setup() {
  createCanvas(640, 400);
  prevTime=millis();
  x=20;
  y=20;
  counter=0;
}

function draw() {
  //background(220);
  
  actualTime=millis();
  
  if( (actualTime-prevTime) >= 1000) {
    print("1 second");
    prevTime=actualTime;
    x=x+10;
    counter=counter+1;
     }
  
  if (counter==60) {
   counter=0;
   x=20;
   y=y+10; 
  }
  
  fill (random(0,255),random(0,255),random(0,255));
  circle(x,y,10)
}

function keyPressed(){
  if(key=="s"){
    save("myData"+frameCount+".png");
  }
}
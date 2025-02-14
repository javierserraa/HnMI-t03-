let prevTime;
let actualTime;
let x;
let y;
let counter;
let port;
let lecture = 0;
let connectBtn;
let val=0;
let diameter;


function setup() {
  createCanvas(640, 400);
  port = createSerial();
  connectBtn = createButton("Connect Serial");
  connectBtn.position(290, 370);
  connectBtn.mousePressed(connectBtnClick);
  
  prevTime=millis();
  x=20;
  y=20;
  counter=0;
}

function draw() {
  readingSerial();
  serialConnected();
  
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
  
  diameter=map(val,0,450,5,15);
  fill (random(0,255),random(0,255),random(0,255));
  circle(x,y,diameter)
}

function keyPressed(){
  if(key=="s"){
    save("myData"+frameCount+".png");
  }
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/* These functions are related to the webSerial library
and are responsible for stabishing connection with your USB ports and the browser. We recommend not to modify them.*/

function serialConnected() {
  if (!port.opened()) {
    connectBtn.html("Connect Serial");
  } else {
    connectBtn.hide();
    connected = 1;
  }
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open(9600);
  } else {
    port.close();
  }
}

function readingSerial() {
  if (port.available() > 0) {
    lecture = port.readUntil("\n");
    if (lecture) {
      lecture = int(lecture);
      console.log(val);
      val = lecture;
    }
  }
}

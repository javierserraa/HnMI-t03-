import processing.serial.*;


Serial mySerial;

String myString;
int nl=10;
float myVal;

void setup()
{
  size(800,600); //size of the canvas
  printArray(Serial.list()); //name of the ports
  delay(1000);
  String myPort = Serial.list()[0]; //select that port
  mySerial = new Serial(this, myPort, 9600);
}

void draw() {
  
  while (mySerial.available() > 0) {
    myString=mySerial.readStringUntil(nl);
    background(125,0,125);
    if (myString !=null) {
      
      myVal=float(myString);
      println(myVal);
      circle(width/2, height/2, myVal);
      smooth();
    }
  }
}

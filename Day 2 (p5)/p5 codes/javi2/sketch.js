let mic;
let waves = [];

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0, 20);
  let vol = mic.getLevel();
  let radius = map(vol, 0, 1, 10, 200);

  waves.push(radius);
  noFill();
  stroke(0, 255, 0);
  strokeWeight(2);

  translate(width / 2, height / 2);
  for (let i = waves.length - 1; i >= 0; i--) {
    ellipse(0, 0, waves[i] * 2);
    waves[i] += 1;
    if (waves[i] > 300) {
      waves.splice(i, 1);
    }
  }
}

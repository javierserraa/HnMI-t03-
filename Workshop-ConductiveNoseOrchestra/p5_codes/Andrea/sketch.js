let drumSound;
let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };
let mouthOpen = false;
let mouthPreviouslyOpen = false;

function preload() {
  faceMesh = ml5.faceMesh(options);
  drumSound = loadSound('joke-drums-242242.mp3');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  image(video, 0, 0, width, height);

  if (faces.length > 0) {
    let face = faces[0];
    let Mount1 = face.keypoints[13]; // Upper lip
    let Mount2 = face.keypoints[14]; // Lower lip
    let mouthDist = dist(Mount1.x, Mount1.y, Mount2.x, Mount2.y);
    
    // Mouth is open if distance > 5
    mouthOpen = mouthDist > 5;

    // Play sound only if mouth opens and was previously closed
    if (mouthOpen && !mouthPreviouslyOpen) {
      drumSound.play();
    }

    // Update previous state
    mouthPreviouslyOpen = mouthOpen;

    // Draw keypoints
    for (let j = 0; j < face.keypoints.length; j++) {
      let keypoint = face.keypoints[j];
      fill(j == 13 || j == 14 ? 'red' : 'green');
      noStroke();
      circle(keypoint.x, keypoint.y, 5);
    }
  }
}

function gotFaces(results) {
  faces = results;
}

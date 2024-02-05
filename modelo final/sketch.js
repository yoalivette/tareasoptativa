// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

function preload(){
    img1=loadImage("aguaA.png");
    img2=loadImage("aguaQ.png");
    img3=loadImage("tierraA.png");
    img4=loadImage("tierraQ.png");
    img5=loadImage("fuegoA.png");
    img6=loadImage("fuegoQ.png");
    img7=loadImage("aireA.png");
    img8=loadImage("aireQ.png");
  }


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function(results) {
    poses = results;
    console.log(results);
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select("#status").html("Model Loaded");
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i ++) {
    // For each pose detected, loop through all the keypoints
    const pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j += 1) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      const keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
      if (pose.leftShoulder.y <240){
        noStroke();
        image(img1, pose.leftShoulder.x-5, pose.leftShoulder.y-0, 50, 50);
      }
      if (pose.rightShoulder.y <240) {
        noStroke();
        image(img3, pose.rightShoulder.x-5, pose.rightShoulder.y-0, 50, 50);
      }
      if (pose.leftEar.y <240) {
        noStroke();
        image(img5, pose.leftEar.x-5, pose.leftEar.y-0, 50, 50);
      }
      if (pose.rightEar.y <240) {
        noStroke();
        image(img7, pose.rightEar.x-5, pose.rightEar.y-0, 50, 50);
      }
      if (pose.leftShoulder.y >240){
        noStroke();
        image(img2, pose.leftShoulder.x-5, pose.leftShoulder.y-0, 50, 50);
      }
      if (pose.rightShoulder.y >240) {
        noStroke();
        image(img4, pose.rightShoulder.x-5, pose.rightShoulder.y-0, 50, 50);
      }
      if (pose.leftEar.y >240) {
        noStroke();
        image(img6, pose.leftEar.x-5, pose.leftEar.y-0, 50, 50);
      }
      if (pose.rightEar.y >240) {
        noStroke();
        image(img8, pose.rightEar.x-5, pose.rightEar.y-0, 50, 50);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j += 1) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
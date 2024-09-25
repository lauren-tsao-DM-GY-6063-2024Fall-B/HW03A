function preload(){
  img01 = loadImage("/images/kusama-00.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(236, 215, 0)

  // image(img01, 0, 0, 400, 500);


let trans = 255

// Multiples of row 1a's
  for (let y = 0; y < height; y += 56) {
    // row 1a (big circles)
    for (let x = 5; x < width; x += 56) {
      strokeWeight(0)
      fill(21, 24, 31, trans)
      ellipse(x, y, 16);
    }
  }

// Multiples of row 1b's
for (let y = 28; y < height; y += 56) {
  // row 1b (small circles)
  for (let x = 5; x < width; x += 56) {
    strokeWeight(0)
    fill(21, 24, 31, trans)
    ellipse(x, y, 8);
  }
}

// column of row 2a's
  for (let y = 28; y < height; y += 56) {
    // row 2a (big circles)
    for (let x = 34; x < width; x += 56) {
      strokeWeight(0)
      fill(21, 24, 31, trans)
      ellipse(x, y, 16);
    }
  }

// column of row 2b's
for (let y = 0; y < height; y += 56) {
  // row 2b (small circles)
  for (let x = 34; x < width; x += 56) {
    strokeWeight(0)
    fill(21, 24, 31, trans)
    ellipse(x, y, 8);
  }
}

}

//circle color is 21, 24, 31
function draw() {
}

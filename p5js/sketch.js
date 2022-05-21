function setup() {
  createCanvas(800, 800);
  frameRate(1);
}

function draw(){
  var petalSize = random(10, 50);
  var flowerCenterX = random(width);
  var flowerCenterY = random(height);
  var r = random(255);
  var g = random(255);
  var b = random(255);

  fill(r, g, b);
  rect(flowerCenterX - petalSize/2, flowerCenterY - petalSize/2, petalSize, petalSize);
  triangle(flowerCenterX + petalSize/2, flowerCenterY - petalSize/2, petalSize, petalSize);
  triangle(flowerCenterX - petalSize/2, flowerCenterY + petalSize/2, petalSize, petalSize);
  triangle(flowerCenterX + petalSize/2, flowerCenterY + petalSize/2, petalSize, petalSize);

}

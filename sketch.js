let img
let img2
let img3
let img4
let img5
let cOffset = 0;
function preload() {
  img = loadImage("forgotten sumer.jpeg")
  img2 = loadImage("ancient sumer.jpeg")
  img3 = loadImage("hanging-gardens-of-babylon-2.jpeg")
  img4 = loadImage("Proverbs.jpg")
  img5=loadImage("download.png");
}
function setup() {
  createCanvas(800, 600);
  colorMode(HSL, 100);
  rainbow = createImage(width, height)
  rainbow.loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let h = map(i, 0, width, 0, 100)
      rainbow.set(i, j, color(h, 100, 70));
    }
  }
  rainbow.updatePixels();
colorMode(RGB);
}
function draw() {
  image(rainbow, 0, 0);
  
  image(img, 0, 0);
 filter(POSTERIZE, 3);
  img.resize(0, 300)
  image(img, 0, 100);
tint(0,255,0,200);
  image(img2, 0, 300);
noTint();
  img2.resize(0, 300);
 tint(0, 153, 204, 126); 
  image(img3, 400, 0);
noTint();
  img3.resize(0, 300);

  image(img4, 400, 300);
  noTint();
  img4.resize(350, 0);
  //image 5
  tint(0, 150, 204); // Tint blue
  image(img5,200,320);
  noTint();
  img5.resize(200,0);
  //verticl lines 
  strokeWeight(6);
  stroke(255, 0, 0, 50);
  line(0,0,10,height);
  line(50,0,50,height);
  line(100,0,100,height);
 // line(300,0,300,height);
  //line(350,0,350,height); 
}

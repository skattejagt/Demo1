function setup() {
  let canvas = createCanvas(600, 400);
  canvas.position(300, 50);

  let txt = createDiv('This is an HTML string!');
  txt.position(50, 50);
}

function draw() {
  background(220, 180, 200);

  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}

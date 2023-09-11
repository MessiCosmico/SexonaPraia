function setup() {
    createCanvas(800, 800);
    background("blue");
  }
  
  function draw() {
  
    stroke("blue");
    fill("red");
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 25);
    }
  }
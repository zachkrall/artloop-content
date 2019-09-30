let string = 'SHOW YOUR ART HERE';
let c = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  fill(255);
  
  push();
  
  for(let x=-200;x<width;x++){
    x = x+180;
    for(let y=-100;y<height;y++){
      y = y+40;
      
      for(let i=0;i<string.length;i++){
        let xx = x+(i*9);
        fill(
          map(x, 0, width, 0, 255),
          map(y, 0, width, 0, 255),
          255
        );
        text(string.charAt(i), xx, y + Math.sin(xx * 0.05 + c * 0.05)*20 );
      }
      
    }
  }
  pop();
  
  push();
    rectMode(CENTER);
    textAlign(CENTER,CENTER);
    fill(255);
    rect(width*0.5, height*0.5, 600, 120);
    fill(0);
    textSize(50);
    text("https://artloop.surge.sh", width*0.5, height*0.5, 600, 120);
  pop();
  
  c++;
}
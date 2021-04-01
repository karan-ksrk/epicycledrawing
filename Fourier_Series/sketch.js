
time = 0;
wave = [];
let slider ;
function setup() {
  createCanvas(700, 400);
  y = [100, 100, 100, -100, -100, -100,100, 100, 100, -100, -100, -100, ];
  let fourierY = dft(y);
  slider = createSlider(0, 100, 1);
}

function draw() {
  background(55);
  translate(200, 200);
  
  let x = 0;
  let y= 0;
  
  for(let i=0; i<slider.value(); i++){
    let prevx = x;
    let prevy = y;
    
    n= i*2 + 1;
    let radius = 50  * (4/ (n * PI));
    
    x += radius * cos(time * n);
    y += radius * sin(time * n);
  
    stroke(255, 100)
    noFill();
    ellipse(prevx, prevy, radius*2);
    
    line(prevx, prevy, x, y);
  
    
  }
  wave.unshift(y);
  line(x, y, 100, y);

  
  beginShape();
  for(let i=0; i<wave.length; i++){
    vertex(i+100, wave[i]);
  }
  endShape();
  

  
  time += 0.02;
  
  
}
let particles = [];
let myfont, musicfont;
let myimg;
let i = 1;
let messages = ["Hi", "Vidya Sirisha", "Wish You", " A Verry", "Happy Birthday"];
let musicnotes = "abfjlnrt";
function preload() {
  myfont = loadFont("BalooChettan-Regular.ttf");
  musicfont = loadFont("ToneDeafBB.ttf");
  // myimg = loadImage("image.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let size;
  if(height > width) {
    size = ((width * displayDensity())/3) / (messages[0].length / 5);
  } else {
    size = ((height * displayDensity())/3) / (messages[0].length / 5);
  }
  let sf = map(messages[0].length, 1, 15, 0.15, 0.25);
  let points = myfont.textToPoints(messages[0], width/2  - ((messages[0].length*(size/4)) / displayDensity()), height/2 + height/(messages[0].length * 2 * displayDensity()), (size / displayDensity()), {sampleFactor: sf, simplifyThreshold: 0});
  let r = random(200) + 55;
  let g = random(200) + 55;
  let b = random(200) + 55;
  for(let p of points) {
    let particle = new Particle(p.x, p.y);
    particle.setrgb(r,g,b);
    particles.push(particle);
  }
  sf = 0.23;
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  points = musicfont.textToPoints(musicnotes[floor(random(musicnotes.length))], 100/displayDensity(), height - (50/displayDensity()), 200/displayDensity(), {sampleFactor: sf, simplifyThreshold: 0});
  for(let p of points) {
    let particle = new Particle(p.x, p.y);
    particle.setrgb(r,g,b);
    particles.push(particle);
  }

  points = musicfont.textToPoints(musicnotes[floor(random(musicnotes.length))], (width-200/displayDensity()), height - (50/displayDensity()), 200/displayDensity(), {sampleFactor: sf, simplifyThreshold: 0});
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  for(let p of points) {
    let particle = new Particle(p.x, p.y);
    particle.setrgb(r,g,b);
    particles.push(particle);
  }

  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  points = musicfont.textToPoints(musicnotes[floor(random(musicnotes.length))], (width-200/displayDensity()), 150/displayDensity(), 200/displayDensity(), {sampleFactor: sf, simplifyThreshold: 0});
  for(let p of points) {
    let particle = new Particle(p.x, p.y);
    particle.setrgb(r,g,b);
    particles.push(particle);
  }
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  points = musicfont.textToPoints(musicnotes[floor(random(musicnotes.length))], 100/displayDensity(), 150/displayDensity(), 200/displayDensity(), {sampleFactor: sf, simplifyThreshold: 0});
  for(let p of points) {
    let particle = new Particle(p.x, p.y);
    particle.setrgb(r,g,b);
    particles.push(particle);
  }
  stroke(255);
  strokeWeight(4);
}

// function showimage() {
//   let w = myimg.width / 20;
//   let h = myimg.height / 20;
//   let p = 0;
//   for(let j = 0; j < 20; j++) {
//     for(let k = 0; k < 20; k++) {
//       if(p < particles.length) {
//         particles[p].target.x = j * w;
//         particles[p].target.y = k * h;
//         particles[p].targetReached = false;
//         particles[p].setDafault();
//         p++;
//       } else {
//         let particle = new Particle(k*h, j*w);
//         particles.push(particle);
//       }
//     }
//   }
// }

function nextMessage() {
  // if(i == messages.length + 2) {
  //   for(let p of particles) {
  //     p.targetReached = false;
  //     p.flee();
  //   }
  //   i = 0;
  //   return;
  // }
  // if(i == messages.length + 1) {
  //   showimage();
  //   i++;
  //   return;
  // }
  if(i == messages.length) {
    for(let p of particles) {
      p.targetReached = false;
      p.flee();
    }
    // i++;
    i = 0;
    return;
  }
  let size;
  if(height > width) {
    size = ((width * displayDensity())/3) / (messages[i].length / 5);
  } else {
    size = ((height * displayDensity())/3) / (messages[i].length / 5);
  }
  let sf = map(messages[i].length, 1, 15, 0.15, 0.25);
  let j = 0;

  let points = myfont.textToPoints(messages[i], width/2  - ((messages[i].length*(size/4)) / displayDensity()), height/2 + height/(messages[i].length * 2 * displayDensity()), (size / displayDensity()), {sampleFactor: sf, simplifyThreshold: 0});
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  for(j = 0; j < points.length && j < particles.length; j++) {
    particles[j].target.x = points[j].x;
    particles[j].target.y = points[j].y;
    particles[j].targetReached = false;
    particles[j].setrgb(r,g,b);
    particles[j].setDafault();
  }
  for(; j < points.length; j++) {
    let p = new Particle(points[j].x, points[j].y)
    p.setrgb(r,g,b);
    particles.push(p);
  }

  points = points.concat(musicfont.textToPoints(musicnotes[floor(random(musicnotes.length))], 100/displayDensity(), height - (50/displayDensity()), 200/displayDensity(), {sampleFactor: 0.23, simplifyThreshold: 0}));
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  for(; j < points.length && j < particles.length; j++) {
    particles[j].target.x = points[j].x;
    particles[j].target.y = points[j].y;
    particles[j].targetReached = false;
    particles[j].setrgb(r,g,b);
    particles[j].setDafault();
  }
  for(; j < points.length; j++) {
    let p = new Particle(points[j].x, points[j].y)
    p.setrgb(r,g,b);
    particles.push(p);
  }

  points = points.concat(musicfont.textToPoints(musicnotes[floor(random(musicnotes.length))], (width-200/displayDensity()), height - (50/displayDensity()), 200/displayDensity(), {sampleFactor: 0.23, simplifyThreshold: 0}));
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  for(; j < points.length && j < particles.length; j++) {
    particles[j].target.x = points[j].x;
    particles[j].target.y = points[j].y;
    particles[j].targetReached = false;
    particles[j].setrgb(r,g,b);
    particles[j].setDafault();
  }
  for(; j < points.length; j++) {
    let p = new Particle(points[j].x, points[j].y)
    p.setrgb(r,g,b);
    particles.push(p);
  }

  points = points.concat(musicfont.textToPoints(musicnotes[floor(random(musicnotes.length))], (width-200/displayDensity()), 200/displayDensity(), 200/displayDensity(), {sampleFactor: 0.23, simplifyThreshold: 0}));
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  for(; j < points.length && j < particles.length; j++) {
    particles[j].target.x = points[j].x;
    particles[j].target.y = points[j].y;
    particles[j].targetReached = false;
    particles[j].setrgb(r,g,b);
    particles[j].setDafault();
  }
  for(; j < points.length; j++) {
    let p = new Particle(points[j].x, points[j].y)
    p.setrgb(r,g,b);
    particles.push(p);
  }

  points = points.concat(musicfont.textToPoints(musicnotes[floor(random(musicnotes.length))], 100/displayDensity(), 200/displayDensity(), 200/displayDensity(), {sampleFactor: 0.23, simplifyThreshold: 0}));
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
  for(; j < points.length && j < particles.length; j++) {
    particles[j].target.x = points[j].x;
    particles[j].target.y = points[j].y;
    particles[j].targetReached = false;
    particles[j].setrgb(r,g,b);
    particles[j].setDafault();
  }
  for(; j < points.length; j++) {
    let p = new Particle(points[j].x, points[j].y)
    p.setrgb(r,g,b);
    particles.push(p);
  }

  for(; j < particles.length; j++) {
    particles[j].targetReached = false;
    particles[j].flee();
  }
  i++;
}



function draw() {
  background(0);
  let count = 0;
  // if(i == messages.length + 2) {
  //   for(let particle of particles) {
  //     particle.update();
  //     let p = particle.getcord();
  //
  //     image(myimg, (50/displayDensity()) + floor(p.x), floor(p.y), myimg.width/20, myimg.height/20, particle.target.x, particle.target.y, (myimg.width/20) , (myimg.height/20));
  //
  //     if(particle.targetReached)
  //       count++;
  //   }
  // } else {
    for(let particle of particles) {
      particle.update();
      let p = particle.getcord();
      stroke(floor(particle.r), floor(particle.g), floor(particle.b));
      point(floor(p.x), floor(p.y));

      if(particle.targetReached)
        count++;
    }
  // }
  if(count == particles.length)
    nextMessage();
}

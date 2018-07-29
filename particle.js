class Particle {
  constructor(x, y) {
    switch(floor(random(4))) {
      case 0:
        this.pos = createVector(floor(random(width)) + width,floor(random(height)) + height);
        break;
      case 1:
        this.pos = createVector(floor(random(width)) - width,floor(random(height)) + height);
        break;
      case 2:
        this.pos = createVector(floor(random(width)) + width,floor(random(height)) - height);
        break;
      case 3:
        this.pos = createVector(floor(random(width)) - width,floor(random(height)) - height);
    }
    this.targetReached = false;
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.maxSpeed = 2;
    this.maxForce = 0.8 / displayDensity();
    this.r;
    this.g;
    this.b;
  }
  setrgb(r,g,b)  {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  flee() {
    switch(floor(random(4))) {
      case 0:
        this.target.x = floor(random(width)) + width;
        this.target.y = floor(random(height)) + height;
        break;
      case 1:
        this.target.x = floor(random(width)) - width;
        this.target.y = floor(random(height)) + height;
        break;
      case 2:
        this.target.x = floor(random(width)) + width;
        this.target.y = floor(random(height)) - height;
        break;
      case 3:
        this.target.x = floor(random(width)) - width;
        this.target.y = floor(random(height)) - height;
    }
    this.maxForce = 10;
  }
  setDafault() {
    this.maxForce = 0.8 / displayDensity();
  }
  update() {
    let acc = this.arrive();
    this.vel.add(acc);
    this.pos.add(this.vel);
    if(this.vel.mag() < 0.05) {
      this.targetReached = true;
    }
  }
  arrive() {
    let desired = p5.Vector.sub(this.target, this.pos);
    let speed = this.maxSpeed;
    let dist = desired.mag();
    if(dist < 30); {
      speed = map(dist, 0, 30, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }
  getcord() {
    return this.pos;
  }
}

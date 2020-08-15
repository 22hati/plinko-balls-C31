const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 380;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,792,480,20);

  for(var k=0;k<=width;k=k+80) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=40;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,75,10));
  }

  for(var j=15;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j=40;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,275,10));
  }

  for(var j=15;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,375,10));
  }

  for(var j=15;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,375,10));
  }

  //Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display(); 

  for(var k=0;k<plinkos.length;k++) {
    plinkos[k].display();
  }
  
  for(var j=0;j<divisions.length;j++) {
    divisions[j].display();
  }

  if(frameCount%10===0) {
    particles.push(new Particle(random(width/2-20,width/2+20),10,10));
  }

  for(var j=0;j<particles.length;j++) {
    particles[j].display();
  }

  drawSprites();
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var backgroundImg;
var snow1;

function preload(){

  backgroundImg = loadImage("snow2.jpg");


}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow1 = new snow(random(10,780),0);
  
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  
if(frameCount%20 === 0){
    snow1.display();
}
  
}
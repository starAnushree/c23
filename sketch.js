const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,box1

function setup() {
  createCanvas(400,400);
engine=Engine.create()
world=engine.world
box1=new Box();

}

function draw() {
  background("black"); 
  Engine.update(engine) 
 box1.display();
 
  drawSprites();
}
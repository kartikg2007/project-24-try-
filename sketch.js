
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var paper, ground, dustbin, dustbin2, dustbin3
//var edges

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(50,80,20)

	ground = new Ground()

	dustbin = new Dustbin(600,670,125,10)
	dustbin2 = new Dustbin(570, 660, 10,125)
	dustbin3 = new Dustbin(630, 660, 10,125)

	//edges = createEdgeSprites()

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();

  //paper.bounceOff(egdes)
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:35,y:-35})
	}
}




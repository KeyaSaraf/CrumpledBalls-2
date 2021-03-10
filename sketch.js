const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperIMG;

function preload()
{
	paper1 = loadImage("Sprites/paper.png");
	binline1 = loadImage("Sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,665,1000,20);

	binline1 = new dustbin(630,650,200,10);
	binline2 = new dustbin(530,620,10,80);
	binline3 = new dustbin(730,620,10,80);

	paper1 = new paper(100,-10,50);

	Engine.run(engine);  
}

function draw() {
 background("white");
 rectMode(CENTER);
 
 binline1.display();
 binline2.display();
 binline3.display();

 paper1.display();

 ground1.display();

 drawSprites();
}

function keyPressed()
{
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:400,y:-400});
	}
}
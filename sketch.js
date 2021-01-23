
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,dustbin,ground,box1,box2,box3



function setup() {
	createCanvas(1500, 650);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.

	paper = new paper(100,300,70)
   
	
  
	
	ground = new Ground(750,640,1500,20)
	box1 = new Bin(1200,540,100,100)
}


function draw() {
  rectMode(CENTER);
  background("blue");
  rectMode(CENTER)
  drawSprites();
 
  paper.display();
  ground.display();
  box1.display();
 
}
function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(paper.body,paper.body.position,
		{
	  x : 83,
	  y : - 30
		}
	  );
	}
}




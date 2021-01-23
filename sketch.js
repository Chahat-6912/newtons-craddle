
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Mtter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(400,150,300, 20)

	bob1 = new bob(300, 350, 50)
	bob2 = new bob(350, 350, 50)
	bob3 = new bob(400, 350, 50)
	bob4 = new bob(450, 350, 50)
	bob5 = new bob(500, 350, 50)

	rope1 = new chain(bob1.body, roof.body, -100*2, 0)
	rope2 = new chain(bob2.body, roof.body, -100*2, 0)
	rope3 = new chain(bob3.body, roof.body, -100*2, 0)
	rope4 = new chain(bob4.body, roof.body, -100*2, 0)
	rope5 = new chain(bob5.body, roof.body, -100*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}




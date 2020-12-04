var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var rec1,rec2,rec3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}ntuhbhjvvhv

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	rec1=createSprite(400,650,100,10)
	rec1.shapeColor=color("red")
	rec1.scale=1;
	World.add(world, rec1);
	
	rec2=createSprite(350,622,10,70)
	rec2.shapeColor=color("red")
	rec2.scale=1;
	World.add(world, rec2);
	
	rec3=createSprite(450,622,10,70)
	rec3.shapeColor=color("red")
	rec3.scale=1;
	World.add(world, rec3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
Matter.Body.applyForce( packageSprite.body , packageSprite.body.position, {y:3})
	
	 
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
//packageSprite.body.position , packageBody.body , packageBody.body.position
    
  
}
}




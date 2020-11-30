
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.constraint
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,roofobject
var rope1,rope2,rope3,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	roofobject=new Roof(width/2,height/4,width/7,20)

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobobject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobobject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobobject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobobject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobobject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new Rope(bobobject1,body,roofobject,body,-bobDiameter*2,0)

	rope2=new Rope(bobobject2,body,roofobject,body,-bobDiameter*1,0)
	rope3=new Rope(bobobject3,body,roofobject,body,0,0)
	rope4=new Rope(bobobject4,body,roofobject,body,bobDiameter*1,0)
	rope5=new Rope(bobobject5,body,roofobject,body,bobDiameter*2,0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofobject.display()

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
bobobject1.display();
bobobject2.display();
bobobject3.display();
bobobject4.display();
bobobject5.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45})
	}
}

function drawLine(constraint){

bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyoffset=constraint.pointB;

roofBodyX=roofBodyPosition.x+roofBodyoffset.x
roofBodyY=roofBodyPosition.y+roofBodyoffset.y
line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);


}



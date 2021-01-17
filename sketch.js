
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;

function preload() {
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 700);

	boy = createSprite(200, 550);
	boy.addImage("boy", boyImg);
	boy.scale = 0.2;



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200, 700, 2400, 50);

	stone = new Stone(95, 440, 30);

	tree = new Tree(900, 350, 600, 700);

	mango1 = new Mango(900, 250, 0);
	mango2 = new Mango(900, 150, 0);
	mango3 = new Mango(800, 250, 0);
	mango4 = new Mango(1000, 250, 0);
	mango5 = new Mango(1000, 150, 0);

	chain = new Chain(stone.body, { x: 100, y: 440 });

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(240);

	drawSprites();

	ground.display();
	stone.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	chain.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);


}

function mouseDragged() {

	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })

}

function mouseReleased() {

	chain.fly();

}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 95, y: 440 })
		chain.attach(stone.body);
	}
}

function detectCollision(stone,mango1){
	mango1BodyPosition=mango1.body.position 
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y)
	if(distance<=mango1.r+stone.r){
		Matter.Body.setStatic(mango1.body,false);
	}
	
}

function detectCollision(stone,mango2){
	mango2BodyPosition=mango2.body.position 
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mango2BodyPosition.x,mango2BodyPosition.y)
	if(distance<=mango2.r+stone.r){
		Matter.Body.setStatic(mango2.body,false);
	}
	
}

function detectCollision(stone,mango3){
	mango3BodyPosition=mango3.body.position 
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mango3BodyPosition.x,mango3BodyPosition.y)
	if(distance<=mango3.r+stone.r){
		Matter.Body.setStatic(mango3.body,false);
	}
	
}

function detectCollision(stone,mango4){
	mango4BodyPosition=mango4.body.position 
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mango4BodyPosition.x,mango4BodyPosition.y)
	if(distance<=mango4.r+stone.r){
		Matter.Body.setStatic(mango4.body,false);
	}
	
}

function detectCollision(stone,mango5){
	mango5BodyPosition=mango5.body.position 
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mango5BodyPosition.x,mango5BodyPosition.y)
	if(distance<=mango5.r+stone.r){
		Matter.Body.setStatic(mango5.body,false);
	}
	
}

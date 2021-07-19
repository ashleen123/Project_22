const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var bob2;
var bob3;
var bob4;
var bob5;
var con;
var con2;
var con3;
var con4;
var con5;

function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(200,100,230,20,roof_options);
    World.add(world,roof);
	
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
	var bob_options = {
	  restitution : 0.8,
	  isStatic:false
	}
  
	bob = Bodies.circle(150,200,10,bob_options);
	bob2 = Bodies.circle(175,200,10,bob_options);
	bob3 = Bodies.circle(200,200,10,bob_options);
	bob4 = Bodies.circle(225,200,10,bob_options);
	bob5 = Bodies.circle(250,200,10,bob_options);
	World.add(world,bob);
	World.add(world,bob2);
	World.add(world,bob3);
	World.add(world,bob4);
	World.add(world,bob5);
  
	con = Matter.Constraint.create({
	  
	  pointA : {x:150, y :100},
	  bodyB : bob,
	  pointB : {x:0, y:0},
	  length : 100,
	  stiffness : 0.1
	})
	con2 = Matter.Constraint.create({
  
	  pointA : {x:175, y:100},
	  bodyB : bob2,
	  pointB : {x:0, y:0},
	  length : 100,
	  stiffness : 0.1
	})
	con3 = Matter.Constraint.create({
  
		pointA : {x:200, y:100},
		bodyB : bob3,
		pointB : {x:0, y:0},
		length : 100,
		stiffness : 0.1
	  })
	  con4 = Matter.Constraint.create({
  
		pointA : {x:225, y:100},
		bodyB : bob4,
		pointB : {x:0, y:0},
		length : 100,
		stiffness : 0.1
	  })
	  con5 = Matter.Constraint.create({
  
		pointA : {x:250, y:100},
		bodyB : bob5,
		pointB : {x:0, y:0},
		length : 100,
		stiffness : 0.1
	  })
  
	World.add(world,con);
	World.add(world,con2);
	World.add(world,con3);
	World.add(world,con4);
	World.add(world,con5);

  }
  
  function draw() 
  {
	background(51);
	Engine.update(engine);
  
	ellipse(bob.position.x,bob.position.y,10);
	ellipse(bob2.position.x,bob2.position.y,10);
	ellipse(bob3.position.x,bob3.position.y,10);
	ellipse(bob4.position.x,bob4.position.y,10);
	ellipse(bob5.position.x,bob5.position.y,10);
	rect(roof.position.x,roof.position.y,230,20);
  
	push();
	strokeWeight(2);
	stroke(255);
	line(con.pointA.x,con.pointA.y,bob.position.x,bob.position.y);
	line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y)
	line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y)
	line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);
	line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y);
	pop();
  
  }
  
  function keyPressed(){
	{
	  if(keyCode == UP_ARROW){
  
		Matter.Body.applyForce(bob,{x:0, y:0},{x:-0.008,y:0})
  
	  }
	}
  }
  
  
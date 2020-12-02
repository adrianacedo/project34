
const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
   const Mouse = Matter.Mouse;
 const Constraint = Matter.Constraint;
 const MouseConstraint = Matter.MouseConstraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;
    let canvasmouse = Mouse.create(canvas.elt);
     canvasmouse.pixelRatio = pixelDensity();
      let options = { mouse: canvasmouse };
       mConstraint = MouseConstraint.create(engine, options);
     World.add(world, mConstraint);
	//Create the Bodies Here.
	roof = new Roof (width/2,height/4,240,20);
	ball1 = new Ball (720,700,40);
	ball2 = new Ball (760,700,40);
	ball3 = new Ball (800,700,40);
	ball4 = new Ball (840,700,40);
	ball5 = new Ball (880,700,40);
    constraint1={ bodyA:ball1.body, bodyB:roof.body, stiffness :0.04, }
    var pendulum1=Constraint.create(constraint1)
	World.add(world, pendulum1);

	constraint2={ bodyA:ball2.body, bodyB:roof.body, stiffness :0.04, }
    var pendulum2=Constraint.create(constraint2)
	World.add(world, pendulum2);

	constraint3={ bodyA:ball3.body, bodyB:roof.body, stiffness :0.04, }
    var pendulum3=Constraint.create(constraint3)
	World.add(world, pendulum3);
	
	constraint4={ bodyA:ball4.body, bodyB:roof.body, stiffness :0.04, }
    var pendulum4=Constraint.create(constraint4)
	World.add(world, pendulum4);
	
	constraint5={ bodyA:ball5.body, bodyB:roof.body, stiffness :0.04, }
    var pendulum5=Constraint.create(constraint5)
    World.add(world, pendulum5);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.run(engine);
  roof.display();
  ball1.display()
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  line(ball1.body.position.x,ball1.body.position.y,roof.body.position.x -80,roof.body.position.y);
  line(ball2.body.position.x,ball2.body.position.y,roof.body.position.x -40,roof.body.position.y);
  line(ball3.body.position.x,ball3.body.position.y,roof.body.position.x ,roof.body.position.y);
  line(ball4.body.position.x,ball4.body.position.y,roof.body.position.x +40,roof.body.position.y);
  line(ball5.body.position.x,ball5.body.position.y,roof.body.position.x +80,roof.body.position.y);
  drawSprites();
 
}

function mouseDragged() {
     Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
     }


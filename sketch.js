const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;

function setup(){
    createCanvas(windowWidth/2,windowHeight);
    engine = Engine.create();
    world = engine.world;

    bob1 = new Pendulum(180,400,"red");
	bob2 = new Pendulum(240,400,"red");
	bob3 = new Pendulum(300,400,"red");
	bob4 = new Pendulum(360,400,"red");
    bob5 = new Pendulum(420,400,"red");

    sling1 = new Sling(bob1.body,{x:180,y:100})
    sling2 = new Sling(bob2.body,{x:240,y:100})
    sling3 = new Sling(bob3.body,{x:300,y:100})
    sling4 = new Sling(bob4.body,{x:360,y:100})
    sling5 = new Sling(bob5.body,{x:420,y:100})

    Engine.run(engine);
}

function draw(){

    background(0);

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}


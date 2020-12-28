const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,550,50,50);
    box2 = new Box(1000,550,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(900,550);
    log1= new Log(900,520,250,PI/2);
    box3=new Box(800,485,50,50);
    box4=new Box(1000,485,50,50);
    pig2=new Pig(900,485);
    log2=new Log(900,455,250,PI/2);
    box5=new Box(900,420,50,50);
    log3=new Log(850,400,125,PI/7);
    log4=new Log(950,400,125,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}

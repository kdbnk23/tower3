const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var score = 0;
var ground1, block9, block8, block7, block6, block5, block4, block3, block2, block1, slingshot

function setup() {
  createCanvas(800,400);
  polygon= Bodies.circle(50,200,20)
  World.add(world,polygon)
  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40,40)

  slingshot=new Slingshot(this.polygon, {x:100, y:200})
  ground1=new Ground(400,200,800,5);
  var block1=new Box(330, 235, 30,40)
  var block2=new Box(360,235,30,40)
  var block3=new Box(390,235,30,40)
  var block4=new Box(420,235,30,40)
  var block5=new Box(450,235,30,40)

  var block6=new Box(360,195,30,40)
  var block7=new Box(390,195,30,40)
  var block8=new Box(420,195,30,40)

  block9=new Box(390,155,30,40)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  slingshot.display(

  )
}



const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine, world;
var table, tableImage;
var striker, strikerImage;
var backgroundImg;
var launcher1;



function preload(){ 
    tableImage = loadImage("table.jpg");
    
    
}

function setup(){
   canvas = createCanvas(800, 1000)
   canvas.position(displayWidth/2-300, 10);

   engine = Engine.create();
   world = engine.world;
   

    striker = new Striker(400, 850); 
   
    /*backgroundImg = createSprite(width/2, height/2, 1500, 900)
    backgroundImg.addImage(tableImage);
    backgroundImg.scale = 1.6;*/
    

   /*striker = createSprite(350, 800, 20, 20)
   striker.addImage(strikerImage); 
    striker.scale = 0.1*/

    launcher1 = new Launcher(striker.body, {x: striker.x, y:striker.y})

    
   
}

function draw(){
    Engine.update(engine);
    background(tableImage)

    

     striker.display();
     launcher1.display();   
    

    drawSprites();
}   

function mousePressed(){
    Matter.Body.setStatic(striker.body, false);
}

function mouseDragged(){

    
    Matter.Body.setPosition(striker.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    launcher1.fly();
}
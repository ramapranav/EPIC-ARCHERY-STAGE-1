const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var PlayBase,Play,compBase,angle;

function preload(){

  
  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  
   //Create Player Base and Computer Base Object
   
   
   compBase=new ComputerBase(width-300,random(450,height-300),180,150);
  
   playBase= new PlayerBase(300,random(450,height-300),180,150);
    
   play= new Player(300,playBase.body.position.y-150,50,180);
   
   computerplay= new ComputerPlayer(width-300,compBase.body.position.y-150,50,180)
  
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   play.display();
   compBase.display();
   playBase.display();
   computerplay.display();


   //display Player and computerplayer
   
  

}

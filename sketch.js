const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var dog1,happyDog
var database,foodS,foodStock


function preload()
{

 
}

function setup() {
  createCanvas(800, 800);
  background('green')
  


  dog1 =  new Doggo(400,400,30,30);
  dog2 = new Doggo(400,400,30,30);
  
}


function draw() {  
  drawSprites();
  dog1.display();

  if (keyWentDown(UP_ARROW)){
    
    dog2.display();
    dog1.velocityX = 100
   
}

  

}




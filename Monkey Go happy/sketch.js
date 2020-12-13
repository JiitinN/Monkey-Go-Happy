
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

var PLAY=1
var END=0
var gameState=1

function preload(){
  
  
  monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,450)
  
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1;
  
 ground = createSprite(400,350,900,10);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 
  
 score=0;
  
 obstacleGroup = new Group();
 FoodGroup = new Group();
}


function draw() {
  background("green") 
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("white");
  text("Survival Time: "+ survivalTime, 100, 50);
  
  if(gameState === PLAY){
    
    monkey.collide(ground);
    
   if(ground.x<0){
    ground.x=ground.width/2;
   }
    
    survivalTime = Math.ceil(frameCount/frameRate())
    
    if(keyDown("space")) {
      monkey.velocityY = -10;
    }
    
    monkey.velocityY = monkey.velocityY + 0.5;
    
    food();
    obstacles();
  }
  drawSprites();
}



function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;  
    banana.velocityX=-5;
    banana.lifetime=140;
    
    FoodGroup.add(banana)
  }
}

function obstacles(){
  if(frameCount % 200 === 0){
    obstacle = createSprite(300,325,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.lifetime = 100;
    obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
  }
}
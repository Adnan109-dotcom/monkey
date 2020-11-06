
var monkey , monkeyImage
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var ground;

function preload(){
  
  
  monkeyImage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(600, 400);
  
  monkey = createSprite(120, 315, 20, 20);
  monkey.addAnimation("running", monkeyImage);
  monkey.scale = 0.1
 
  ground = createSprite(300, 370, 600, 60);
  ground.shapeColor = "lightgreen"
  
  bananaGroup = createGroup()
  obstacleGroup = createGroup()
}


function draw() 
{
  background("lightblue");
  
  
  
  score = score + Math.round(frameCount % 60 === 0)
  
  text("Survival Time = " + score, 300, 50)
  
  monkey.collide(ground)
  
  if (keyDown("space") && monkey.y >= 309.2)
    {
      monkey.velocityY = -20;
    }
      monkey.velocityY = monkey.velocityY + 0.9;
  
  if (monkey.isTouching(bananaGroup))
    {
      banana.destroy()
    }
  
  if (monkey.isTouching(obstacleGroup))
    {
      background(0);
      monkey.velocityX = 0;
      monkey.visible = false
      banana.velocityX = 0;
      banana.visible = false
      obstacle.velocityX = 0;
      obstacle.visible = false
      ground.visible = false;
      
      textSize(20)
      text("GAME OVER", 350, 200)
    }

 
  spawnBananas()
  spawnObstacle()
  drawSprites();
}


function spawnObstacle()
{
  if (frameCount % 125 === 0)
    {
  obstacle = createSprite(600, 315, 20, 10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -8;
  obstacleGroup.add(obstacle)
    }
}

function spawnBananas()
{
  if (frameCount % 125 === 0)
    { 
  banana = createSprite(600, 98, 50, 50);
  banana.velocityX = -7;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  bananaGroup.add(banana)
    }
}
var path,boy,cash,diamonds,jwellery,sword,bomb,gold;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var score = 0;
var cashG,diamondsG,jwelleryG,swordGroup,bombImg,gold;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("track3.jpeg");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  bombImg = loadImage("bomb.png");
  goldImg = loadImage("Gold.png");
  endImg =loadImage("gameOver.png");
  music = loadSound("mixkit-pixel-chiptune-explosion-1692.wav");
  sound = loadSound("mixkit-game-success-alert-2039.wav");
}

function setup(){
  createCanvas(400,500);
  path = createSprite(200,200);
  path.addAnimation("sence",pathImg)
  path.scale = 1;
  path.velocityY=4;
  path.y=path.height/2;
  
  boy = createSprite(200,360);
  boy.addAnimation("run",boyImg);
  boy.scale = 0.080;
  
  cashG = new Group();
  bombG = new Group();
  swordG = new Group();
  jwellG = new Group();
  goldG = new Group();
  
  
  
}
function draw(){
 
  if (gameState===PLAY){
  
  background(0); 
  boy.x = mouseX;
  edges = createEdgeSprites();
  boy.collide(edges)
  if (path.y>300){
  path.y =height/2;
}
  
 
    var select_obstacles = Math.round(random(1,5));
    if (frameCount % 150==0){
     if (select_obstacles==1){
       createcash();
     }else if (select_obstacles==2){
       createsword();
     }else if (select_obstacles==3){
       creategold();
     }else if (select_obstacles==4){
       createbomb();
     }else {
       createjwell();
     }
        
}    

 
  if (cashG.isTouching(boy)){
    cashG.destroyEach();
    score = score+50;
    sound.play();
  }
  
  if (jwellG.isTouching(boy)){
    jwellG.destroyEach();
    score = score+50;
    sound.play();
  }
  if (goldG.isTouching(boy)){
    goldG.destroyEach();
    score = score+50;
    sound.play();
  }
  if (bombG.isTouching(boy)){
    gameState=END;
    music.play();
  }
    if (swordG.isTouching(boy)){
    gameState=END;
    music.play();
  }
    
}
 if (gameState === END){
   gameover = createSprite(200,200);
   gameover.addImage(endImg);
   gameover.scale=0.8
   path.velocityY=0;

   goldG.setVelocityYEach(0);
   jwellG.setVelocityYEach(0);
   cashG.setVelocityYEach(0);
   bombG.setVelocityYEach(0);
   swordG.setVelocityYEach(0);
   
   goldG.destroyEach();
   cashG.destroyEach();
   jwellG.destroyEach();
   bombG.destroyEach();
   swordG.destroyEach();
   
   boy.visible=false
   
   
 }
   
  drawSprites();
  fill ("yellow");
  textSize(15);
  stroke("black");
  strokeWeight(2);
  text ("{ TREASURE COLLECTING }  :"+score,90,20);
}
  function createcash(){
 
 var  cash = createSprite(Math.round(random(40,360),10,10));
  cash.addImage(cashImg);
  cash.scale = 0.100;
  cash.velocityY = +4
  cash.lifetime=100;
  cashG.add(cash);
  

  }
  function createsword(){  
  var sword = createSprite(Math.round(random(40,360),10,10));
  sword.addImage(swordImg);
  sword.scale = 0.100;
  sword.velocityY = +4;
  sword.lifetime=100;
  swordG.add(sword);

}
  function createbomb(){
  var bomb = createSprite(Math.round(random(40,360),10,10));
  bomb.addImage(bombImg);
  bomb.scale = 0.100;
  bomb.velocityY = +4
  bomb.lifetime=100;
  bombG.add(bomb);


  }
  function creategold(){
  var gold = createSprite(Math.round(random(40,360),10,10));
  gold.addImage(goldImg);
  gold.scale = 0.060; 
  gold.velocityY = +4
  gold.lifetime=100;
  goldG.add(gold);

  }
  function createjwell(){
  var jwell = createSprite(Math.round(random(40,360),10,10));
  jwell.addImage(jwelleryImg);
  jwell.scale = 0.150;
  jwell.velocityY = +4
  jwell.lifetime=100;
  jwellG.add(jwell);

  }

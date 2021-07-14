const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rover, roverImg, ground, groundImg;
var water=[], tool=[],  invisibleBox=[];
var alienClass1=[], alienClass1Img, alienClass2=[], alienClass2Img, alienClass3=[], alienClass3Img;
var fireballImg, heartImg,rockImg,laserImg, toolImg, waterImg;
var points=0;
var lives=2;
var waterCount=0;
var waterGroup,alienClass1Group, aleinClass2Group;
var alienClass1Count=0;
var engine, world;
var gameState=1;
var lvlTwo=2, lvlThree=3;
 
function preload(){
roverImg=loadImage("rover.png");
groundImg=loadImage("marsBackground.png");
waterImg=loadImage("images/water.png");
alienClass1Img=loadImage("images/alienclass1.png");
alienClass2Img=loadImage("images/alienClass2.png");
alienClass3Img=loadImage("images/alienclass3.png");
fireballImg=loadImage("images/fireball.png");
heartImg=loadImage("images/heart.png");
rockImg=loadImage("images/rock.png");
laserImg=loadImage("images/laser.png");
toolImg=loadImage("images/tool.png");
//var positionX = 200, positionY = 650;



}


function setup() {

  
  engine = Engine.create(); 
  world = engine.world;
 
  createCanvas(3000,800);
  
  ground= new Ground(1500,650, 3000, 70);
  
  //rover = new Rover(200, 600);
  rover=createSprite(200,600,25,25);
  
  heart = new Heart(1850,610);
  //rover.velocityX=1;
  
  waterGroup=new Group;
  
  


 
}

function draw() {
  background(groundImg);
  
  Engine.update(engine);
  ground.display();
  //rover.display();
  //Matter.Body.setVelocity(rover.body, {x:1, y:0});
  
  if(keyDown(UP_ARROW) && (rover.y>300)){ 
    console.log("up")
    rover.y-=5;
   // Matter.Body.setVelocity(rover.body, {x:0, y:1});
    //console.log(rover.y);
  }

  if(keyDown(DOWN_ARROW) && (rover.y<650)){
    console.log("down")
   // Matter.Body.setVelocity(rover.body, {x:0, y:-1});
   rover.y+=5;
  }

   if(keyDown(RIGHT_ARROW)){
    rover.velocityX=1.5;
  }
  
  if(keyDown(LEFT_ARROW)){
    rover.velocityX=1.5;
    rover.x-=5;
  }
 // console.log(rover.body.velocity);

  
if(gameState===1){
        textSize(30);
        fill("white");
        text("Goal: Collect water droplets and avoid the aliens!", 100,40)
        
        textSize(30);
        fill("teal");
        text("Points: ", 1500,40);

        textSize(30);
        fill("light purple");
        text("Lives: ", 900, 40);
          
        //displayAlienClass1();

        //displayWater();
        spawnWater();

        heart.display();
        
        
        
         if(waterGroup.isTouching(rover)){
          waterGroup.destroyEach();
          points+=1;
        }
      

  }
    
      




if(gameState===2){
        background(groundImg);
        textSize(30);
        fill("white");
        text("Goal: Collect the tools and avoid the second class aliens!", 100,40)
        
        textSize(30);
        fill("teal");
        text("Points: ", 1500,40);
        
        textSize(25);
        fill("white");
        text("If You Collect the boxes, you can turn invisible! ", 1500,60);



        displayAlienClass2();
        displayTool();
        createInvisibleBox();

}


if(gameState===3){
  background(groundImg);
  textSize(30);
  fill("white");
  text("Goal: Collect the rocks and dodge the fireball of the final aliens!", 100,40)
  
  textSize(30);
  fill("teal");
  text("Points: ", 1500,40);
  
  textSize(25);
  fill("white");
  text("You can use a laser to help!", 1500,60);



  displayAlienClass3();


}




drawSprites();

}










function displayAlienClass1(){
  if(frameCount%100==0){
    
   // alienClass1=createSprite(500, 400, 20, 20);
  //  alienClass1.addImage(alienClass1Img);
  //  alienClass1.scale=0.3;
    alienClass1.x=Math.round(random(200, 2250));
    alienClass1.y=Math.round(random(300, 650));
    alienClass1.push(new AlienClass1(alienClass1.x, alienClass1.y));

  }
  for(var j=0; j<alienClass1.length; j++){
    alienClass1[j].display();
  }

}




 /*function displayWater(){
    if(frameCount%70==0){
   
    waterX=Math.round(random(200, 2250));
    waterY=Math.round(random(300, 650));

    water.push(new Water(waterX, waterY));

  } 
  for(var i =0; i<water.length; i++){
    water[i].display(); 
   }


}
*/

function spawnWater(){
  if(frameCount%70==0){
    
    waterX=Math.round(random(rover.x+20,2250));
    waterY=Math.round(random(300,650));

  
  
  for(var i=300; i<2250; i=1+200){
    water=createSprite(i, waterY, 10,10);
    waterGroup.add(water);
  }
}
}



 function keyPressed(){
  
  /*if(keyDown(RIGHT_ARROW)){
    rover.body.velocityX=3.5;
  }
  
  if(keyDown(LEFT_ARROW)){
    rover.body.velocityX=1.5;
    rover.body.x-=5;
  }
  */
 }


 function displayAlienClass2(){
  if(frameCount%175==0){
    
    alienClass2.x=Math.round(random(rover.x+40, 2250));
    alienClass2.y=Math.round(random(300, 650));
   
    alienClass2.push(new alienClass2(alienClass2.x, alienClass2.y));

  }
  for(var k=0; k<alienClass1.length; k++){
    alienClass2[k].display();
  }


}

function displayTool(){
  if(frameCount%90==0){
 
  toolX=Math.round(random(200, 2250));
  toolY=Math.round(random(300, 650));

  tool.push(new Tool(toolx, tooly));




  
} 
for(var m =0; m<water.length; m++){
  tool[m].display(); 
 }


}


function createInvisibleBox(){
  if(frameCount%200==0){
    invisibleBoxX=Math.round(random(200, 1750));
    invisibleBoxY=Math.round(random(200, 600))
    
    invisibleBox.push(new invisibleBox(invisibleBoxX, invisibleBoxY));

  }

  for(var l =0; l<invisibleBox.length; l++){
    invisibleBox[l].display(); 
   }
}

/* function keyPressed(){
  if(keyCode===38){
  // && (rover.body.y>300)){ 
    console.log("up")
    //Matter.Body.velocity(rover.body,{x:rover.body.position.x, y:rover.body.position.y-1});
    Matter.Body.setVelocity(rover.body,{x:0,y:1})
    console.log(rover.body.position.y);
  }

  
  if(keyCode===40) {
  //&& (rover.body.y<650)){ 
    console.log("down")
    //Matter.Body.velocity(rover.body, {x:rover.body.position.x, y:rover.body.position.y+1});
    Matter.Body.setVelocity(rover.body,{x:0,y:-1})
    console.log(rover.body.position.y);
  }
}
*/


function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2&&
    object1.y - object2.y < object1.height/2 + object2.height/2&&
    object2.y - object1.y < object1.height/2 + object2.height/2){
      return true;
    }
    else {
      return false;
    }
}
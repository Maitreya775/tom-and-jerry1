
function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("cat1.png");
    tomImg2=loadAnimation("cat2.png","cat3.png");
    tomImg3= loadAnimation("cat4.png");
    jerryImg1=loadAnimation("mouse1.png");
    jerryImg2= loadAnimation("mouse2.png","mouse3.png");
    jerryImg3=loadAnimation("mouse4.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600)
    jerry=createSprite(200,600)
    tom.addAnimation("toms",tomImg1)
    tom.scale=0.2
    jerry.addAnimation("jerry",jerryImg1)
    jerry.scale=0.2
    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if (keyCode==LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomImg2);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
}
}
  




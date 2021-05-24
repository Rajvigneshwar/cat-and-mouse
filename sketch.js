var bgImg;
var cat,catImage1,catImage2,catImage3;
var mouse,mouseImage1,mouseImage2,mouseImage3;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");

    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage3=loadAnimation("images/cat4.png");
    
    mouseImage1=loadAnimation("images/mouse1.png");
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3=loadAnimation("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here



    cat = createSprite(750,675);
    cat.addAnimation("lying",catImage1);
    cat.scale=0.15;
    
    
    mouse = createSprite(80,675);
    mouse.addAnimation("standing",mouseImage1);
    mouse.scale=0.10;
    

}





function draw() {

    background(bgImg);

    
    
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2);
    {   
        cat.velocityX=0;
        cat.addAnimation("sitting",catImage3)
        cat.changeAnimation("sitting")
        mouse.addAnimation("looking",mouseImage3)
        mouse.changeAnimation("looking")
        
    }
   drawSprites();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        
        cat.addAnimation("catrunning",catImage2);
        cat.changeAnimation("catrunning");
        cat.velocityX=-3;

        mouse.addAnimation("teasing",mouseImage2);
        mouse.changeAnimation("teasing");
        mouse.frameDelay = 10;
    }
}







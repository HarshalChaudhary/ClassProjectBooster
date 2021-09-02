var gardenImage
var cat,mouse
function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png")
    cat1Image=loadAnimation("images/cat1.png")
    mouse1Image=loadAnimation("images/mouse1.png")
    cat2Image=loadAnimation("images/cat2.png","images/cat3.png")
    mouse2Image=loadAnimation("images/mouse2.png","images/mouse3.png")
    cat4Image=loadAnimation("images/cat4.png")
    mouse4Image=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(970,600);
    cat.addAnimation("cat1",cat1Image)
    mouse=createSprite(470,600);
    mouse.addAnimation("mouse1",mouse1Image)
    cat.scale = 0.2;
    mouse.scale = 0.2;

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width+mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("cat4",cat4Image)
        cat.changeAnimation("cat4")
        cat.x=300;
        cat.scale = 0.2;
        mouse.addAnimation("mouse4",mouse4Image)
        mouse.changeAnimation("mouse4")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keycode === LEFT_ARROW){
        mouse.addAnimation("mouse2",mouse2Image)
        mouse.changeAnimation("mouse2")
        mouse.frameDelay = 25
        cat.velocityX = -5;
        cat.addAnimation("cat2",mouse2Image)
        cat.changeAnimation("cat2")
    }

}

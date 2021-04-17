var fixed,moving
function setup() {
  createCanvas(1500,1000);
  fixed=createSprite(600, 300, 50, 50);
  moving=createSprite(400,200,50,50)
}

function draw() {
  background('black');  
  moving.x=mouseX
  moving.y=mouseY
  if (moving.x-fixed.x <= moving.width/2+fixed.width/2 &&
    fixed.x-moving.x <= moving.width/2+fixed.width/2 && 
    moving.y-fixed.y <= moving.height/2+fixed.height/2 &&
    fixed.y-moving.y <= moving.height/2+fixed.height/2) {
    moving.shapeColor="lightblue"
    fixed.shapeColor="lightblue"
  }else{
    moving.shapeColor="red"
    fixed.shapeColor="red"
  }
  drawSprites();
}
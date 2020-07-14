var bullet,wall;
var speed,weight,thickness,damage;

function setup() {
  createCanvas(1000,400);
  wall = createSprite(900,200,30,300);
  wall.shapeColor = "gray";

  speed = Math.floor (random (223,321));
  weight = Math.floor(random(30,52));
  thickness = Math.floor (random(22,83));
  bullet = createSprite(100, 200, 50, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = 10; 

}

function draw() {
  background(0);
  text("Worldwide Military",220,50);
 collide(bullet,wall);
  drawSprites();
}
  function damages() {
  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

  if (damage > 10) {
    wall.shapeColor = color (255,0,0);
  }
  if (damage < 10) {
    wall.shapeColor = color (0,255,0);
  }
  } 

function collide(object1,object2) {
  if (object2.x - object1.x === object1.width/2 + object1.width/2 - 10) {
    object1.velocityX = 0;
    object2.velocityX =0;
    damages();
  }
  }
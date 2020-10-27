//Create variables here
var  dogImg, dog, happyDogImg, happyDog, database, foodS, foodStock;
var FeedTheDog, AddFood, fedTime, lastFed, foodObj;

function preload()
{
  dogImage = loadImage("Dog.png");
  happyDogImg=loadImage ("happyDog.png");
	//load images here
}

function setup() {
  createCanvas(500,500);

  database= firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg);
  dog.scale=0.1;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);

  Obj = new Food();
  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);
  
  
}


function draw() {  
  background(orange);
  /*if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }*/
fedTime = database.red('Feed Time');
fedTime.on("value", function(data){

});
drawSprites();
  //add styles here
  teztSize = 20;
  fill("purple");
  //text("Note Press UP_ARROW Key to feed Drago Milk!",150,100)
  text("Food Remaining: " + foodS,250,200)

  Obj.display();



}
function readStock(data){
  foodS = data.val();
}

  



  //add styles here



function writeStock(x){
  if(x<=0){
    x=0;
  
  }else{
    x=x-1;
  }
  database.ref('/').update({
Food:x
   } )
}




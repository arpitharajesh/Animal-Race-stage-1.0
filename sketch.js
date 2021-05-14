var canvas, bgImg;
var score = 0;
var gameState = 0;
var animalCount;
var allAnimals;
var distance = 0;
var database;

var form, animal, game, bg2;

var animal1, animal2, animal3, animal4, animals;
//var animal1_img, animal2_img, animal3_img, animal4_img;

function preload(){
  animal1_img = loadImage("images/standing_deer.png");
  animal2_img = loadImage("images/elephant.png");
  animal3_img = loadImage("images/lion.jpg");
  animal4_img = loadImage("images/rhino.jpg");
  bgImg = loadImage("images/animal_bg.png")
  bg2 = loadImage("images/ground.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 
  if(animalCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  textSize(10)
  text("Score:"+ score, displayWidth*3/4, 10)

}

/******************************************************************************
Where's Sausage Dog?
by Pippin Barr

An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
var targetX;
var targetY;
var targetImage;
//win doggos
var winImageX;
var winImageY;
//play again button
var buttonX;
var buttonY;
//easy button
var ButtonX;
var easyButtonY;
//medium button
var medButtonY;
//hard button
var hardButtonY;
// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;
//max score
var maxScore = 5;
//score count
var scoreCount = 0;
//adds extra decoys to levels
var extra;
//displays how many decoys on level
var decoyAmount;
// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 100;
ellipseX = 500;
ellipseY = 100;
//seperates menu/levels/win screen
var gameScreen = 0;
// preload()
//
// Loads the target and decoy images before the program starts
var findSound;
var winScreenSound;
function preload() {
//sounds
  findSound = new Audio("assets/sounds/win.wav");
  winScreenSound = new Audio("assets/sounds/winScreen.wav");
//animals
  targetImage = loadImage("assets/images/animals-target.png");
  winImage = loadImage("assets/images/winImage.png");
  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");
// resets game after win
  playAgainButton = loadImage("assets/images/playAgainButton.png")
  //buttons
  easyButton = loadImage("assets/images/easyButton.png")
  medButton = loadImage("assets/images/medButton.png")
  hardButton = loadImage("assets/images/hardButton.png")
//menu pictures
  targetReversed = loadImage("assets/images/targetReversed.png")
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,125,150);
  imageMode(CENTER);
  textAlign(CENTER);
  menu();
}

function draw() {
//win screen
  if (scoreCount == maxScore) {
    gameScreen = 2;
    background(0);
    // Prepare our typography
    textFont("Helvetica");
    textSize(128);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));
    // Tell them they won!
    text("YOU WIN",width/2,height/2);
    noFill();
    stroke(random(255));
    strokeWeight(20);
    buttonX = windowWidth/2;
    buttonY = windowHeight/2;
    image(playAgainButton,buttonX,buttonY+200);
    hotdog();
  }
}
//banner AKA Score & *FIND ME*
function banner(){
  background(155,185,150);
  //banner
  noStroke();
  fill(250);
  rect(0,0,windowWidth,200);
  //find this*
  textSize(100);
  fill(0);
  text("FIND:",200,windowHeight/35);
  //behind target image
  fill(219, 199, 199);
  ellipse(500,100,200,200);
  //target image
  image(targetImage,ellipseX, ellipseY, 200,200);
  //displays score
  fill(0);
  textSize(100);
  text("SCORE: "+scoreCount,windowWidth/2,100);
}
//main menu. Has EASY/MEDIUM/HARD
function menu(){
  gameScreen = 0;
  scoreCount = 0;
  ButtonX = windowWidth/2;
  easyButtonY = windowHeight/3;
  medButtonY = windowHeight/2;
  hardButtonY = windowHeight/1.5;
  background(255,125,150);
  image(easyButton,ButtonX, easyButtonY);
  image(medButton,ButtonX, medButtonY);
  image(hardButton,ButtonX, hardButtonY);
  noStroke();
  fill(0);
  textSize(200);
  text("FIND THE DOG!",windowWidth/2, windowHeight/5);
  textSize(150);
  text("By Magdalene Papadimas", windowWidth/2, windowHeight/1.2);
//target image for show
  fill(219, 199, 199);
//ellipse for dog on left
  ellipse(windowWidth/5.4,windowHeight/2,1500,1500);
//ellipse for dog on right
  ellipse(windowWidth/1.2,windowHeight/2,1500,1500);
  image(targetImage,windowWidth/5.4,windowHeight/2,1500,1500);
  image(targetReversed, windowWidth/1.2,windowHeight/2, 1500,1500);
}
//decoy spawns
function logic(){
  gameScreen = 1;
  // Use a for loop to draw as many decoys as we need
  for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy
      var x = random(0,width);
      var y = random(255,height);
      // Generate a random number we can use for probability
      var r = random();
      // Use the random number to display one of the ten decoy
      // images, each with a 10% chance of being shown
      // We'll talk more about this nice quality of random soon enough
      if (r < 0.1) {
        image(decoyImage1,x,y);
      }
      else if (r < 0.2) {
        image(decoyImage2,x,y);
      }
      else if (r < 0.3) {
        image(decoyImage3,x,y);
      }
      else if (r < 0.4) {
        image(decoyImage4,x,y);
      }
      else if (r < 0.5) {
        image(decoyImage5,x,y);
      }
      else if (r < 0.6) {
        image(decoyImage6,x,y);
      }
      else if (r < 0.7) {
        image(decoyImage7,x,y);
      }
      else if (r < 0.8) {
        image(decoyImage8,x,y);
      }
      else if (r < 0.9) {
        image(decoyImage9,x,y);
      }
      else if (r < 1.0) {
        image(decoyImage10,x,y);
      }
  }

  hotdog();
}
//hot dog spawn
function hotdog(){
  // Once we've displayed all decoys, we choose a location for the target
  targetX = random(0,width);
  targetY = random(255,height);
  // And draw it (this means it will always be on top)
  image(targetImage,targetX,targetY);
}

//displays score
function score(){
  fill(0);
  textSize(50);
  text("SCORE: "+score,300,50);
}

//resets game
function reset (){
    banner();
    logic();
  }

//resets score for new game
function newGame(){
  if(scoreCount == maxScore){
    scoreCount = 0;
  }
  reset();
}

//plays sound on win screen
function winSoundScreen(){
  winScreenSound.play();
  winScreenSound.currentTime = 0;
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
//main menu buttons
if(gameScreen == 0){
  //easyButton && adds 10 decoys everytime you find the hot dog
  // Check if the mouse is in the x range of the target
    if (mouseX > ButtonX - easyButton.width/2 && mouseX < ButtonX + easyButton.width/2) {
    // Check if the mouse is also in the y range of the target
      if (mouseY > easyButtonY - easyButton.height/2 && mouseY < easyButtonY + easyButton.height/2) {
        winSoundScreen();
        numDecoys = 25 ;
        extra= 10;
        newGame();
      }
//medium button && adds 50 decoys everytime you find the hot dog
    else if (mouseY > medButtonY - medButton.height/2 && mouseY < medButtonY + medButton.height/2) {
      winSoundScreen();
        numDecoys = 100;
        extra = 50;
        newGame();
    }
//hard button && adds 100 decoys everytime you find the hot dog
    else if (mouseY > hardButtonY - hardButton.height/2 && mouseY < hardButtonY + hardButton.height/2) {
      winSoundScreen();
        numDecoys = 300;
        extra = 100;
        newGame();
    }
  }
}
//dog button
if(gameScreen == 1){
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      findSound.play();
      findSound.currentTime = 0;
      scoreCount = scoreCount + 1;
      numDecoys = numDecoys + extra;
      reset();
    }
  }
}
//play again button screen
if(gameScreen == 2){
  // Check if the mouse is in the x range of the target
  if (mouseX > buttonX - playAgainButton.width/2 && mouseX < buttonX + playAgainButton.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > buttonY+200 - playAgainButton.height/2 && mouseY < buttonY+200 + playAgainButton.height/2) {
      menu();
    }
  }
}
}

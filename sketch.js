// 1-D vector for board 0-8 in standard tic-tac-toe
let vect = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let human = 'X';
let ai = 'O';
let winner = 'nothing';
let remainingSquares = 9;

function setup() {
  createCanvas(400, 400);
}


function drawBoard() {
  line(133, 0, 133, 400);
  line(266, 0, 266, 400);
  line(0, 133, 400, 133);
  line(0, 266, 400, 266);
}

// function mouseClicked() {
//   let location = 0;
//   if(mouseX < 133 && mouseY < 133) {
//     //first square
//     location = 0;
//   }  else if(mouseX > 133 && mouseX < 266 && mouseY < 133) {
//     //second square
//     location = 1;
//   }  else if(mouseX > 266 && mouseY < 133) location = 2;
//   else if(mouseX < 133 && (mouseY > 133 && mouseY < 266))location = 3;
//   else if(mouseX > 133 && (mouseY > 133 && mouseY < 266) && mouseX < 266) location = 4;
//   else if(mouseX > 266 && (mouseY < 266 && mouseY > 133)) location = 5;
//   else if(mouseX < 133 && mouseY > 266) location = 6;
//   else if(mouseX > 133 && (mouseY > 266 && mouseX < 266)) location = 7;
//   else if(mouseX > 266 && mouseY > 266) location = 8;
//   return location;
// }

function printBoard() {
  noFill();
  if(vect[0] === human) {
    line(25, 25, 108, 108);
    line(25, 108, 108, 25);
  }
  else if(vect[0] === ai) {
    ellipse(66, 66, 96);
  }
  if(vect[1] === human) {
    line(158, 25, 241, 108);
    line(241, 25, 158, 108);
  }
  else if(vect[1] === ai) {
    ellipse(200, 66, 96);
  }
  if(vect[2] === human) {
    line(291, 25, 375, 108);
    line(375, 25, 291, 108);
  }
  else if(vect[2] === ai) {
    ellipse(333, 66, 96);
  }
  if(vect[3] === human) {
    line(25, 158, 108, 241);
    line(25, 241, 108, 158);
  }
  else if(vect[3] === ai) {
    ellipse(66, 200, 96);
  }
  if(vect[4] === human) {
    line(158, 158, 241, 241);
    line(158, 241, 241, 158);
  }
  else if(vect[4] === ai) {
    ellipse(200, 200, 96);
  }
  if(vect[5] === human) {
    line(291, 158, 375, 241);
    line(375, 158, 291, 241);
  }
  else if(vect[5] === ai) {
    ellipse(333, 199.5, 96);
  }
  if(vect[6] === human) {
    line(25, 291, 108, 375);
    line(108, 291, 25, 375);
  }
  else if(vect[6] === ai) {
    ellipse(66.5, 333, 96);
  }
  if(vect[7] === human) {
    line(158, 291, 241, 375);
    line(241, 291, 158, 375);
  }
  else if(vect[7] === ai) {
    ellipse(199.5, 333, 96);
  }
  if(vect[8] === human) {
    line(291, 291, 375, 375);
    line(375, 291, 291, 375);
  }
  else if(vect[8] === ai) {
    ellipse(333, 333, 96);
  }
}

function hasWon() {
  let location = -1;

  if(vect[0] === vect[1] && vect[0] === vect[2] && vect[0] !== ' ') location = 0;
  else if(vect[0] === vect[4] && vect[0] === vect[8] && vect[0] !== ' ') location = 0;
  else if(vect[1] === vect[4] && vect[1] === vect[7] && vect[1] !== ' ') location = 1;
  else if(vect[2] === vect[5] && vect[2] === vect[8] && vect[2] !== ' ') location = 2;
  else if(vect[3] === vect[4] && vect[3] === vect[5] && vect[3] !== ' ') location = 3;
  else if(vect[6] === vect[7] && vect[7] === vect[8] && vect[6] !== ' ') location = 6;
  else if(vect[6] === vect[4] && vect[6] === vect[2] && vect[6] !== ' ') location = 6;
  else if(vect[0] === vect[3] && vect[0] === vect[6] && vect[0] !== ' ') location = 0;
  else if(remainingSquares === 0) location = -100;
  
//-------------------------------------------------------

if(location === -1) {
  winner = -100;
  return 'nothing';
}
if(location === -100) return 'tie';
else if(vect[location] === human) {
  winner = 1;
  return 'X';
}
winner = -1;
return 'O';
}

function aiMove() {
  let loc = floor(random(9));
  while(vect[loc] === ai || vect[loc] === human){ 
    loc = floor(random(9));
  }
  vect[loc] = ai;
}

//this is a comment
let img, img2;
function preload() {
  img = loadImage("https://i.imgur.com/pGtt174.jpg");
  img2 = loadImage('https://i.imgur.com/mX9q5hd.jpg');
}

function printWin() {
  //print("NICE YOU WIN");
  fill(0, 0, 255);
  textSize(50);
  // text('NICE YOU WIN!', 20, 220);
  noStroke();
  fill(255, 255, 255);
  rect(0, 0, width, height);
  if(winner === 1) {
    image(img, 0, 0);
    fill(0, 0, 255);
    text('SUPER NICE', 23, 340);
  }
  else if(winner === -1) {
    resizeCanvas(800, 800);
    fill(255, 0, 0);
    text('SUPER NOT NICE!', 28, 550);
    image(img2, 0, 0);
  }
  else if(winner === -100) {
    fill(0, 0, 255);
    text("Tie tie tie", 23, 50);
  }
}

function setBoard(location) {
  if(vect[location] !== ' ') {
    return false;
  }
  vect[location] = 'X';
  return true;
}

function mousePressed() {
  // let loc = mouseClicked();
  let location = 0;
  if(mouseX < 133 && mouseY < 133) {
    //first square
    location = 0;
  }  else if(mouseX > 133 && mouseX < 266 && mouseY < 133) {
    //second square
    location = 1;
  }  else if(mouseX > 266 && mouseY < 133) location = 2;
  else if(mouseX < 133 && (mouseY > 133 && mouseY < 266))location = 3;
  else if(mouseX > 133 && (mouseY > 133 && mouseY < 266) && mouseX < 266) location = 4;
  else if(mouseX > 266 && (mouseY < 266 && mouseY > 133)) location = 5;
  else if(mouseX < 133 && mouseY > 266) location = 6;
  else if(mouseX > 133 && (mouseY > 266 && mouseX < 266)) location = 7;
  else if(mouseX > 266 && mouseY > 266) location = 8;
  let x = setBoard(location);
  if(x) {
    --remainingSquares;
    if(hasWon() !== 'nothing') return;
    // aiMove();
    aiMove2();
    --remainingSquares;
    winner = hasWon();
  }
}

function aiMove2() {
  let bestScore = -Infinity;
  let move = -1;
  for(let i = 0; i < 9; ++i) {
    if(vect[i] === ' ') {
      vect[i] = ai;
      let tempscore = minimax(vect, 0, false);
      vect[i] = ' ';
      if(tempscore > bestScore) {
        bestScore = tempscore;
        move = i;
      }
    }
  }
  vect[move] = ai;
}

let scores = { X: 10, O: -10, tie: 0};
// * if x wins its 1 if o wins its -1 if tie its 0

let s1 = 0;
let s2 = 0;


function minimax(vect, depth, isMax) {
    let result = hasWon();
    if(result !== 'nothing') {
      return scores[result];
    }
    if(isMax) {
      let bestScore = -Infinity;
      for(let i = 0; i < 9; ++i) {
        if(vect[i] === ' ') {
          vect[i] = ai;
          let tempscore = minimax(vect, depth+1, false);
          vect[i] = ' ';
          bestScore = max(tempscore, bestScore);
        }
      }
      return bestScore;
    }
    else {
      let bestScore = Infinity;
      for(let i = 0; i < 9; ++i) {
        if(vect[i] === ' ') {
          vect[i] = human;
          let tempscore = minimax(vect, depth+1, true);
          vect[i] = ' ';
          bestScore = min(tempscore, bestScore);
        }
      }
      return bestScore;
    }
}

function draw() {
  background(220);
  strokeWeight(4);
  drawBoard();
  printBoard();
  let x = hasWon();
  if(x === 'X' || x === 'O' || x === 'tie') {
    noLoop();
    printWin();
  }
}

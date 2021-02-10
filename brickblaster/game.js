/*
	* Brick Blaster Game Code
	* Code Copyright (c) Zane Wesley 2021
*/

/*
	Canvas Vars
*/
var backCanvas = document.getElementById('backCanvas');
var mainCanvas = document.getElementById('mainCanvas');
var backContext = backCanvas.getContext('2d');
var mainContext = mainCanvas.getContext('2d');
var orientation;
var cw;
var ch;
var gameStarted = false;

/*
	Init Functions
*/

function initBack() {
	var img = document.getElementById('bg');
	backContext.drawImage(img, 0, 0, cw, ch);
	//img = document.getElementById('bg-bottom');
	//backContext.drawImage(img, 0, ch-(ch/2.7), cw, ch/2.7);
}

function initFront() {
	x = mainCanvas.width/2;
	y = mainCanvas.height-60;
	mainContext.font = "50px Balsamiq Sans";
	mainContext.fillStyle = "#FB6600";
	mainContext.strokeStyle = "#9BCB1C";
	mainContext.lineWidth = 15;
	mainContext.strokeText("CLICK TO START", cw/6, ch-(ch/4));
	mainContext.fillText("CLICK TO START", cw/6, ch-(ch/4));
	mainCanvas.addEventListener('click', start);
}

function start() {
	if(!gameStarted) {
		update();
		gameStarted = true;
	}	
}

/*
	Game Vars
*/
var ballRadius = 15;
var x = mainCanvas.width/2;
var y = mainCanvas.height-60;
var dx = 10;
var dy = -10;
var paddleHeight = 15;
var paddleWidth = 100;
var paddleX = (mainCanvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 4;//4
var brickColumnCount = 5;//5
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 20;
var brickOffsetTop = 90;
var brickOffsetLeft = 100;
var score = 0;
var lives = 3;
var colors = ["#0085E0", "#BF43FD", "#00B300", "#FFB700", "#FF7D00", "#DB0B05", "#EC21AE"];
var bricks = [];

/*
	Game Code
*/
if(isMobile()) {
	brickOffsetLeft = mainCanvas.width/6;
	brickRowCount = 3;
	brickColumnCount = 6;
}

for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1, color: colors[Math.floor(Math.random()*colors.length)]};
  }
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  //var relativeX = e.clientX - mainCanvas.offsetLeft;
  if(e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
  	var relativeX = e.clientX - mainCanvas.offsetLeft/2;
  } else if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
  	var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    var relativeX = x = touch.pageX;
  }
  if(relativeX > 0 && relativeX < mainCanvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}
function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            winHandler();
          }
        }
      }
    }
  }
}

function drawBall() {
  mainContext.beginPath();
  mainContext.arc(x, y, ballRadius, 0, Math.PI*2);
  mainContext.fillStyle = "#0095DD";
  mainContext.fill();
  mainContext.closePath();
}
function drawPaddle() {
  mainContext.beginPath();
  mainContext.rect(paddleX, (mainCanvas.height-paddleHeight)-60, paddleWidth, paddleHeight);
  mainContext.fillStyle = "#622C05";
  mainContext.fill();
  mainContext.closePath();
}
function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        mainContext.beginPath();
        mainContext.rect(brickX, brickY, brickWidth, brickHeight);
        mainContext.fillStyle = bricks[c][r].color;
        mainContext.fill();
        mainContext.closePath();
      }
    }
  }
}
function drawScore() {
  mainContext.font = "20px Acme";
  mainContext.fillStyle = "#ffffff";
  //mainContext.strokeStyle = "#167004";
  mainContext.fillText("Score: "+score, 15, 20);
  //mainContext.strokeText("Score: "+score, 15, 20);
}
function drawLives() {
  mainContext.font = "20px Acme";
  mainContext.fillStyle = "#ffffff";
  //mainContext.strokeStyle = "#167004";
  mainContext.fillText("Lives: "+lives, mainCanvas.width-80, 20);
  //mainContext.strokeText("Lives: "+lives, mainCanvas.width-80, 20);
}
function drawBackground() {
	var img = document.getElementById('bg');
	backContext.drawImage(img, 0, 0, cw, ch);
	img = document.getElementById('bg-top');
	backContext.drawImage(img, 0, 0, cw, ch/4.6);
	img = document.getElementById('text-bubble');
	backContext.drawImage(img, 0, 2, 100, 30);
	backContext.drawImage(img, cw-100, 2, 100, 30);
}

function update() {
  mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  drawBackground();

  if(x + dx > mainCanvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy > (mainCanvas.height-ballRadius)-60) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      lives--;
      if(!lives) {
        looseHandler();
      }
      else {
        x = mainCanvas.width/2;
        y = mainCanvas.height-100;
        dx = 3;
        dy = -3;
        paddleX = (mainCanvas.width-paddleWidth)/2;
      }
    }
  }

  if(rightPressed && paddleX < mainCanvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(update);
}

/*
	Game Functions
*/
function winHandler() {
	window.update=function() {
		cancelAnimationFrame(update);
	};
	mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
	backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
	var img = document.getElementById('bg');
	backContext.drawImage(img, 0, 0, cw, ch);
}

function looseHandler() {
	window.update=function() {
		cancelAnimationFrame(update);
	};
	mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
	backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
	var img = document.getElementById('bg');
	backContext.drawImage(img, 0, 0, cw, ch);
}

/*
	Game Event Listeners
*/
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("touchstart", mouseMoveHandler, false);
document.addEventListener("touchmove", mouseMoveHandler, false);

/*
	Helper Functions
*/

function isMobile() {
	if(window.innerWidth < 775) {
		return true;
	} else {
		return false;
	}
}

function resizeHandler() {
	if(!isMobile()) {
		/*backCanvas.width=window.innerWidth*0.55;
		backCanvas.height=window.innerHeight;
		mainCanvas.width=window.innerWidth*0.55;
		mainCanvas.height=window.innerHeight;*/
		backCanvas.width='567.75';
		backCanvas.height=window.innerHeight;
		mainCanvas.width='567.75';
		mainCanvas.height=window.innerHeight;
	} else {
		backCanvas.width=window.innerWidth;
		backCanvas.height=window.innerHeight;
		mainCanvas.width=window.innerWidth;
		mainCanvas.height=window.innerHeight;
	}
	cw = backCanvas.width;
	ch = backCanvas.height;
	initBack();
}

function orientationHandler() {
    console.log("changing orientation ...");
    if(window.innerHeight < window.innerWidth) {
    	orientation = 'landscape';
    } else if(window.innerHeight > window.innerWidth) {
    	orientation = 'portrait';
    }
}

/*
	Event Listeners
*/

window.addEventListener('resize', function(e) {
	orientationHandler();
	resizeHandler();
});
window.addEventListener('orientationchange', function(e) {
	orientationHandler();
});

window.addEventListener('DOMContentLoaded', function(e) {
	resizeHandler();
	initBack();
	initFront();
});

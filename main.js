noseX="";
noseY="";




function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}
	
function setup() {
	canvas = createCanvas(1240,336);
canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	
}

function draw() {
	game()

}

function gotPoses()
{
if(results.length > 0)
{
	console.log(results);
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;

}
}
function game()
{
	console.log("noseX = " + noseX + "noseY  = " + noseY);
}
function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "game is loading";
}




var keys = {};
var game_loop_glob;
var app;

function App(){
	// Set up keyboard interaction
	//keys = {};
	keys[37] = false;
	keys[39] = false;
	keys[27] = false;
	document.onkeydown = function(e) { keys[e.keyCode] = true };
	document.onkeyup = function(e) { keys[e.keyCode] = false };

	//game_loop_glob = this.start(keys);
	this.game;
        
	// TODO: Handle restart 
}

App.prototype.start = function(keys){
	var easy = document.getElementById("easy");
	var medium = document.getElementById("medium");
	var hard = document.getElementById("hard");

	if(easy.checked){
		this.game = new Game();}
	else if(medium.checked){
		this.game = new MediumGame();}
	else if(hard.checked){
		this.game = new HardGame();}
		else
		alert("Please choose a level to play!");
	
	
	var game_loop;
	var g = this.game;
	if(this.game.init()){
		// Set up game loop to display new frames at a fixed rate
		game_loop = setInterval(function(){
			// Logically separating updating and drawing
			g.update(keys);
			
            if (g.status === 1){
                clearInterval(game_loop_glob); 
                g.drawbg(g.width,g.height);
                g.showText("You Won!");
				g.showScore();
				g.showimage(1);
            }
            else if (g.status == 2){
                clearInterval(game_loop_glob);
                g.drawbg(g.width,g.height);
                g.showText("Game Over!");
				g.showScore();
				g.showimage(2);
            }
			else if (g.status == 5){
				clearInterval(game_loop_glob);
				g.drawbg(g.width,g.height);
				g.showVText("Happy Valentine's Day to Dear Eric!");
				g.showimage(1);
			}
			else {
				g.draw();
				g.showimage(0);}
			}, 1000 / 60);
	}else{
		alert('You lack a browser able to run HTML5');
	}
	return game_loop;
}

function allstart(){
	app = new App();
	game_loop_glob = app.start(keys);
}

function restartgame(){
	if(app.game.status == 0){
		alert("you can't restart when the game is running!")
	}
	else{app = new App();
		game_loop_glob = app.start(keys);
	}
}

function pause(){
	clearInterval(game_loop_glob);
	app.game.status = 3; //pause status
}

function resume(){
	game_loop_glob = setInterval(function(){
		// Logically separating updating and drawing
		app.game.update(keys);
		
		if (app.game.status === 1){
			clearInterval(game_loop_glob); 
			app.game.drawbg(app.game.width,app.game.height);
			app.game.showText("You Won!");
			app.game.showScore();
		}
		else if (app.game.status == 2){
			clearInterval(game_loop_glob);
			app.game.drawbg(app.game.width,app.game.height);
			app.game.showText("Game Over!");
		}
		else app.game.draw();
	}, 1000 / 60);
	
}
/*

*/
/*
$(document).ready(function(){
	new App();
});
*/

$(document).ready(function(){
	var canvas = document.getElementById("mainCanvas");
	var ctx = canvas.getContext("2d");
	
	ctx.fillStyle="pink";
	ctx.beginPath();
  	ctx.rect(0,0,800,600);
  	ctx.closePath();
  	ctx.fill();
	
	ctx.fillStyle = "#FFFFFF";
	ctx.font = 'italic bold 30px sans-serif';
	ctx.textBaseline = 'bottom';
	ctx.fillText("Welcome! Please choose a level to play!",100,300);
});

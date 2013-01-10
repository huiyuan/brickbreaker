<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Brick Breaker</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" />
	<script src="http://code.jquery.com/jquery-1.8.3.min.js" type="text/javascript"></script>
	<script src="js/game.js" type="text/javascript"></script>
	<script src="js/app.js" type="text/javascript"></script>
</head>
<body>
	<div id="main-content">
		<div id="canvasdiv">
			<canvas id="mainCanvas" width="800" height="600">If you can read this, your browser doesn't support the canvas element.</canvas>
		</div>
		<div id= "control_panel">
			<div id="chooselevel">
			<h3>Choose a level:</h3>
			<form id="chooselevelform"action="">
				<input type="radio" name="level" value="easy" id="easy" />Easy<br />
				<input type="radio" name="level" value="medium" id="medium" />Medium<br />
				<input type="radio" name="level" value="hard" id="hard" />Hard<br />
			</form>
			</div>
			<div id="buttons">
				<ul>
					<li><label onclick = "allstart();">start</label></li>
					<li><label onclick = "pause();">pause</label></li>
					<li><label onclick = "resume();">resume</label></li>
					<li><label onclick = "restartgame();">restart</label></li>
				</ul>
			</div>
			<div id="scoreb">
				<label>score:</label>
				<span id="scoreboard"></span>
			</div>
			<div id="nametext">
				<span id="nametextE"></span>
				<span id="nametextR"></span>
				<span id="nametextI"></span>
				<span id="nametextC"></span>
			</div>
			<div id="image_end">
				<img id = "endimage"src="" alt="" >
			</div>
		</div>
	</div>	
</body>
</html>

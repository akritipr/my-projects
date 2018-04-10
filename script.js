
const playerMark = "X";
const machMark = "O";
var playerArr = [];
var machArr = [];
var winnerCombinations = [[]];
var foundWinner = false;
var scores = {
	mach : 0,
	human : 0
}
var timer;
var cellIds = [];
document.getElementById("comp-score").innerHTML = scores.mach;
document.getElementById("human-score").innerHTML = scores.human;
document.getElementById("show-result").style.display = 'none';
document.getElementById("table-easy").style.display = 'none';
document.getElementById("table-hard").style.display = 'none';
var cells;
var level;

function cellClicked(e){
	//document.getElementById("buttons").style.display = 'block';
	if((!playerArr.includes(parseInt(e))) && (!machArr.includes(parseInt(e)))){
		document.getElementById(e).innerHTML = playerMark;
		playerArr.push(parseInt(e));
		var isWinner = checkWinner(playerArr, 'human');
		if(!isWinner.foundWinner){

			var remainingCells = cellIds.filter(a => !(playerArr.indexOf(a) > -1));
			remainingCells = remainingCells.filter(a => !(machArr.indexOf(a) > -1));
			console.log(remainingCells);
			machArr.push(remainingCells[0]);
			// if(machArr.length == 5 && playerArr.length == 5 && level == 'easy'){
			// 	gameOver();
			// }else{
				document.getElementById(remainingCells[0]).innerHTML = machMark;
				isWinner = checkWinner(machArr, 'mach');	
			//}
			
		}
		isWinner.foundWinner ? gameWon(isWinner.wonBy) : '';
	}	
}

function checkWinner(arr, player){
	for(var i = 0; i < winnerCombinations.length; i++){
		if(winnerCombinations[i].every( w => arr.indexOf(w) > -1 )){
			foundWinner = true;
			break;
		}		
	}
	return {foundWinner : foundWinner, wonBy : player};
}

function gameOver(){
	//document.getElementById("show-result").innerHTML = "Draw!";
}

function gameWon(wonBy){
	if(level == '0'){
		document.getElementById("game-body").style.opacity = '0.1';
		document.getElementById("show-result").style.display = 'block';
		if(wonBy == 'mach'){
			scores.mach++;
			document.getElementById("comp-score").innerHTML = scores.mach;
			document.getElementById("win-result").style.display = 'none';
			document.getElementById("lose-result").style.display = 'block';
		}else if(wonBy == 'human'){
			scores.human++;
			document.getElementById("win-result").style.display = 'block';
			document.getElementById("lose-result").style.display = 'none';
			document.getElementById("human-score").innerHTML = scores.human;
		}

		timer = setInterval(function(){
			clearBoard();
			document.getElementById("game-body").style.opacity = '1';
			document.getElementById("show-result").style.display = 'none';
		},3000);
	}else if(level == '1'){
		document.getElementById("game-body-hard").style.opacity = '0.1';
		document.getElementById("show-result").style.display = 'block';
		if(wonBy == 'mach'){
			scores.mach++;
			document.getElementById("comp-score-hard").innerHTML = scores.mach;
			document.getElementById("win-result").style.display = 'none';
			document.getElementById("lose-result").style.display = 'block';
		}else if(wonBy == 'human'){
			scores.human++;
			document.getElementById("win-result").style.display = 'block';
			document.getElementById("lose-result").style.display = 'none';
			document.getElementById("human-score-hard").innerHTML = scores.human;
		}

		timer = setInterval(function(){
			clearBoard();
			document.getElementById("game-body-hard").style.opacity = '1';
			document.getElementById("show-result").style.display = 'none';
		},3000);
	}
	
}

function clearBoard(){
	clearInterval(timer);
	playerArr = [];
	machArr = [];
	foundWinner = false;
	for(let i=0; i < cells.children[0].children.length; i++){
		for (let j = 0; j <  cells.children[0].children[i].children.length; j++) {
		cells.children[0].children[i].children[j].innerHTML = '' ;
		}
	}
}

function startAgain(){
	for(let i=0; i < cells.children[0].children.length; i++){
		for (let j = 0; j <  cells.children[0].children[i].children.length; j++) {
		cells.children[0].children[i].children[j].innerHTML = '' ;
		}
	}
	var cellIds = [];
	document.getElementById("comp-score").innerHTML = scores.mach;
	document.getElementById("human-score").innerHTML = scores.human
	document.getElementById("comp-score-hard").innerHTML = scores.mach;
	document.getElementById("human-score-hard").innerHTML = scores.human;;
	scores = {
		mach : 0,
		human : 0
	}
	playerArr = [];
	machArr = [];
	foundWinner = false;
}

function selectLevel(){
	level = document.getElementById("select-level").value;
	document.getElementById("comp-score-hard").innerHTML = scores.mach;
	document.getElementById("human-score-hard").innerHTML = scores.human;
	document.getElementById("comp-score").innerHTML = scores.mach;
	document.getElementById("human-score").innerHTML = scores.human;
	// scores = {
	// 	mach : 0,
	// 	human : 0
	// }
	if(level == '0'){
		playerArr = [];
		machArr = [];
		cellIds = [];
		document.getElementById("table-easy").style.display = 'block';
		document.getElementById("table-hard").style.display = 'none';
		winnerCombinations = [
				[0,1,2],
				[0,4,8],
				[0,3,6],
				[1,4,7],
				[2,5,8],
				[2,4,6],
				[6,7,8],
				[3,4,5],
				[2,4,6]
			];
			cells = document.getElementById("table-one");
				for(let i=0; i < cells.children[0].children.length; i++){
					for (let j = 0; j <  cells.children[0].children[i].children.length; j++) {
					cellIds.push(parseInt(cells.children[0].children[i].children[j].id));
				}
				}

	}else if(level == '1'){
		document.getElementById("table-hard").style.display = 'block';
		document.getElementById("table-easy").style.display = 'none';
		playerArr = [];
		machArr = [];
		cellIds = [];
		winnerCombinations = [
				[10,11,12,13],
				[10,15,110,115],
				[10,14,18,112],
				[11,15,19,113],
				[12,16,110,114],
				[13,17,111,115],
				[13,16,19,112],
				[14,15,16,17],
				[18,19,110,111],
				[112,113,114,115]
			];
			cells = document.getElementById("table-two");
				for(let i=0; i < cells.children[0].children.length; i++){
					for (let j = 0; j <  cells.children[0].children[i].children.length; j++) {
					cellIds.push(parseInt(cells.children[0].children[i].children[j].id));
				}
				}

	}
}
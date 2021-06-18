function hideAll(){
	$("#menu-window").hide();
	$("#game-window").hide();
	$("#settings-window").hide();
}

function showMenuWindow(){
	hideAll();
	$("#menu-window").show();
}

function showSettingsWindow(){
	hideAll();
	$("#settings-window").show();
}

function showGameWindow(){
	hideAll();
	$("#game-window").show();
}

function createChessBoard(){
	$('#chessboard').css({
		"background-color": "black",
		"width": "400px",
		"height": "400px",
		"margin": "auto"
	});
	const files = "abcdefgh";
	const numFiles = 8;
	const numRanks = 8;
	const colors = ["#F0D9B5", "#B58863"]; // in the order [white, black]
	for(let i = 0; i < numRanks; i++){
		for(let j = 0; j < numFiles; j++){
			let idStr = files.charAt(j)+(numFiles - i).toString();
			let colorPref = (i+j)%2 == 0 ? colors[0] : colors[1];
			let colorNotPref = (i+j)%2 == 0 ? colors[1] : colors[0];
			$("#square-prototype")
				.clone()
				.attr("id", idStr)
				.css({
					"background-color": colorPref,
					"display": "flex"
				})
				.appendTo("#chessboard");	
			if(i == numRanks - 1){
				$("#"+idStr).html("<b>"+files.charAt(j)+"</b");
				$("#"+idStr).css({
					"align-items":"flex-end",
					"justify-content":"flex-start",
					"color": colorNotPref,
					"font-size": "12px",
					"padding" : "-5px"
				});
			}
			else if(j == numFiles - 1){
				$("#"+idStr).text(numFiles - i);
				$("#"+idStr).css({
					"align-items":"flex-start", 
					"justify-content":"flex-end",
					"color": colorNotPref,
					"font-size": "12px",
					"padding" : "2px"
				});
			}
		}
	}
	$("#square-prototype").remove();
}

function showPieceLocContainer(){
	return undefined;
}

function loadNextPuzzle(fen){
	let piecesArr = getPieceLocFromFEN(fen)
	return undefined;
}

function getAllFENs(){
	return undefined;
}

$(document).ready(() => {
	showMenuWindow();
	showPieceLocContainer();
	let fenArr = getAllFENs();
	let counter = 0;
	loadNextPuzzle(fenArr[counter]);

	/* Button click events */
	$("#new-game").click( () => {
		showGameWindow();
		createChessBoard();
	});
	$(".exit-to-menu").click( () =>{
		showMenuWindow();
	});
	$("#open-settings-window").click( () =>{
		showSettingsWindow();
	});

	$("#next-puzzle").click( () =>{
		counter++;
		loadNextPuzzle(fenArr[counter]);
	});
});


const searchPath = "res/lichess_sample.csv";
const lichessFens = ["r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24", "5rk1/1p3ppp/pq3b2/8/8/1P1Q1N2/P4PPP/3R2K1 w - - 2 27", "r2qr1k1/b1p2ppp/pp4n1/P1P1p3/4P1n1/B2P2Pb/3NBP1P/RN1QR1K1 b - - 1 16", "r4rk1/pp3ppp/2n1b3/q1pp2B1/8/P1Q2NP1/1PP1PP1P/2KR3R w - - 0 15", "3q1rk1/1pp3pp/5p1P/4pPP1/rb1pP3/3P1N2/b1P1B3/2QK2RR b - - 7 26", "4r3/5pk1/1p3np1/3p3p/2qQ4/P4N1P/1P3RP1/7K w - - 6 34", "r2q1rk1/5ppp/1np5/p1b5/2p1B3/P7/1P3PPP/R1BQ1RK1 b - - 1 17", "2kr3r/pp3p2/4p2p/1N1p2p1/3Q4/1P1P4/2q2PPP/5RK1 b - - 1 20", "4r1k1/5ppp/r1p5/p1n1RP2/8/2P2N1P/2P3P1/3R2K1 b - - 0 21", "5r1k/pp4pp/5p2/1BbQp1r1/6K1/7P/1PP3P1/3R3R w - - 2 26", "2r3k1/p1q2pp1/Q3p2p/b1Np4/2nP1P2/4P1P1/5K1P/2B1N3 b - - 3 33", "r4rk1/p3ppbp/Pp1q1np1/3PpbB1/2B5/2N5/1PPQ1PPP/3RR1K1 w - - 4 18", "8/4R1k1/p5pp/3B4/5q2/8/5P1P/6K1 b - - 5 40", "r3kb1r/pppqpn1p/5p2/3p1bpQ/2PP4/4P1B1/PP3PPP/RN2KB1R w KQkq - 1 11", "r7/2p2r1k/p2p1q1p/Pp1P4/1P2P3/2PQ4/6R1/R5K1 b - - 2 28", "8/8/kpq5/p4pQp/P7/7P/3r2P1/4R2K b - - 10 48", "r3brk1/5pp1/p1nqpn1p/P2pN3/2pP4/2P1PN2/5PPP/RB1QK2R b KQ - 4 16", "3r1rk1/1b1n1pp1/3p4/p4PPQ/4P3/3q1BN1/8/2R2RK1 b - - 1 28", "r3kbnr/ppp1qppp/2n5/3pP3/5B2/4PQ2/PPP2PPP/RN2KB1R w KQkq - 1 7", "2k5/p1pp1p2/1p3Bb1/7p/1nP3PP/1P2rP2/PK6/3R1B1R w - - 7 22", "r2r2k1/1p2qppp/2n1p3/5n2/p2P4/P2Q1N2/BP3PPP/2R1R1K1 w - - 4 20", "2nk4/8/2PBp1n1/1pK1P1p1/1P4P1/8/8/8 b - - 2 42", "2r5/pR5p/5p1k/4p3/4r3/B4nPP/PP3P2/1K2R3 w - - 0 27", "r1bqk1nr/1pp2ppp/p1pb4/4p3/3PP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 6", "8/r1b1q2k/2p3p1/2Pp4/1P2p1n1/2B1P3/NQ6/2K4R b - - 1 36", "1R6/1p2k2p/p2n2p1/4K3/8/6P1/P6P/8 w - - 10 37", "6rk/pp6/2n5/3ppn1p/3p4/2P2P1q/PP3QNB/R4R1K w - - 2 29", "r2qr1k1/ppp2ppp/4b3/3P4/1nP2Q2/2N2N1P/PP3KP1/R4R2 w - - 1 15", "2r2rk1/6pp/3Q1q2/8/3N1B2/6P1/PP1K3P/R4b2 w - - 0 24", "rnbqkb1r/pppp2pp/8/4P3/2B5/4p3/PPPP2PP/R1BQK1NR w KQkq - 0 7", "4r3/p5k1/2p2R1p/2Pp4/1P1pr1P1/P6P/8/3R3K w - - 1 35", "4qk2/1b3rR1/p7/1p2Q3/4P2P/P2P3K/2r5/3R4 w - - 5 41", "8/7R/5p2/p7/7P/2p5/3k2r1/1K2N3 w - - 3 48", "r2r2k1/2q1bpp1/3p1n1p/1ppN4/1P1BP3/P5Q1/4RPPP/R5K1 b - - 1 20", "3q2k1/2r5/pp3p1Q/2b1n3/P3N3/2P5/1P4PP/R6K b - - 0 24", "8/2k3n1/3p2p1/1KpP2Pp/2P4P/7B/8/8 w - - 0 57", "6k1/p3b2p/1p1pP3/2p3P1/1Pnp3B/P6P/3Q3K/8 w - - 0 38", "2q3k1/4br1p/6RQ/1p1n2p1/7P/1P4P1/1B2PP2/6K1 b - - 0 27", "3r1rk1/1pR3pp/p2bp3/1q2Np2/3P4/1P5Q/5PPP/4R1K1 w - - 2 27", "r6k/2q3pp/8/2p1n3/R1Qp4/7P/2PB1PP1/6K1 b - - 0 32", "2rr4/2N2pk1/p1Q1b1pp/1p4q1/3pP3/1B1P4/PPP3PP/6RK w - - 7 25", "r5k1/2p1pp2/pp4p1/1q1r4/5P2/2QP2R1/PP6/1K4R1 b - - 0 32", "8/8/1p1k1p1p/3npp2/2B5/PP1K1PP1/7P/8 b - - 0 36", "8/8/5pp1/3K3p/3N2kP/8/8/8 w - - 2 62", "6k1/pp3pp1/2p1q1Pp/3b4/8/6Q1/PB3Pp1/3RrNK1 b - - 2 27", "r2q1r1k/2p3p1/pb2Q2p/1p1p1n2/8/1BP5/PP1B1PPP/3RR1K1 w - - 3 20", "r1q3k1/4bppp/pp2pn2/4B3/8/2N2Q2/PPPR1PPP/6K1 b - - 0 18", "1r6/5k2/2p1pNp1/p5Pp/1pQ1P2P/2P4R/KP3P2/3q4 w - - 4 31", "1k1r3r/2q5/pp1n2p1/8/1Q6/3R2P1/PPP2P1P/3R2K1 b - - 4 29", "r5kr/pp1qb1p1/2p4p/3pPb1Q/3P4/2P1B3/PP4PP/R4RK1 b - - 1 17", "8/8/2p2k2/1p1p4/3P4/1PP1pK2/8/8 b - - 3 64", "r2qr2k/1pp2pp1/1b4np/pP2P3/P4n2/BQN2N1P/5PP1/R3R1K1 w - - 3 20", "3Q4/5kr1/8/1P2pB2/2Pp1n2/q2P3P/7K/5R2 w - - 7 49", "r4rk1/ppq2ppp/2nbp1b1/3p4/3Pn3/2PB1N1P/PP3PP1/R1BQRNK1 b - - 4 14", "3q1nk1/1bN2rpp/pp1P4/1N6/4n2b/8/PPP2PPP/R1BQ1RK1 w - - 1 16", "rk5r/1b3R2/pp2p2q/4P2p/B2p3B/4R2P/PP4P1/5Q1K b - - 0 27", "8/6pk/7p/p1p4P/P2p2R1/1P3q1K/2P3R1/8 w - - 11 58", "4r1k1/p4p1p/1p6/6q1/3P2n1/P4Q2/1P1B2P1/7K w - - 0 34", "2kr3r/p1p1bpp1/2p2n1p/8/8/1P6/P1P1RPPP/RNB3K1 w - - 1 16", "6k1/p4p2/1p5p/4r3/P3B3/1P3P2/2PK2PP/8 w - - 0 29", "2r3rk/5p2/4p2p/4q3/1Q6/8/1P3PPP/R4RK1 w - - 0 31", "r1bq3Q/1np2kp1/p5B1/1p1Pp3/1Pn2BP1/2b2P2/P3K3/R4N2 b - - 5 35", "1k1r4/ppp3p1/8/1P5p/8/P3n2P/2P1r1P1/B3NRK1 b - - 4 31", "8/4k3/1p1p4/rP2p1p1/P2nP1P1/3BK3/8/R7 w - - 0 35", "8/6pp/3Bp2k/p2pP2P/P2bp1PK/8/r7/5R2 b - - 2 37", "7k/pb1qn2n/1p2R2Q/2p2p2/2Pp4/3B4/PP3PrP/4RK2 b - - 1 27", "2rq1rk1/7p/1n4pb/1R2p3/pPpP1P2/P1B5/3NQ1PP/2R3K1 w - - 0 31", "4r1k1/2R3pp/2p4q/1p1p4/3P4/P7/1PP2R2/1K1N4 b - - 3 32", "8/7k/pR5p/3p4/5r2/2P1p2P/P5P1/6K1 w - - 0 40", "r1q4r/2p1kP2/3p4/2pPp3/p1P1Pb2/P1NB3b/1P3KP1/R2Q1R2 w - - 1 23", "r2qr1k1/p5bp/1pp1b1p1/8/2QN1p2/2P1n2P/PP3PP1/R1B1RNK1 w - - 1 18", "3rk3/5p1r/p2Np1p1/3bP3/P2n4/8/1P3RPP/5RK1 b - - 4 25", "6k1/pb2r1pN/1n4Bp/3p4/1P2pR2/P7/3R1PPP/2r3K1 w - - 2 30", "rn1qk2r/pp3ppp/3bp1b1/3p4/3Pn2N/3BB3/PPP2PPP/RN1Q1RK1 w kq - 4 10", "8/1p4p1/pb2ppkp/3n4/3P4/P3BN1P/1P2KPP1/8 b - - 0 26", "6k1/6pp/p1N2p2/1pP2bP1/5P2/8/PPP5/3K4 b - - 1 28", "3r4/p1p2ppp/4k3/6Q1/5P2/4P3/Prqn2PP/3R1RK1 w - - 3 22", "2r3k1/4brp1/2p3b1/2Pp1q1p/3B3P/2P2N2/PP3P1K/R2Q2R1 w - - 1 31", "8/7Q/3p1kp1/1p6/2b5/2P4P/5PPK/4q3 b - - 8 36", "r6k/3NR1p1/4n2p/5b2/p6P/6R1/8/6K1 w - - 2 43", "br1qkb1r/p1pp1ppp/4Pn2/6B1/3Qn3/5NP1/P3PPBP/RN1R2K1 b k - 0 15", "8/8/2B2p1p/P4Pp1/3p1kP1/1b1Pb2P/8/4K3 b - - 0 50", "2r3k1/p2q1pbp/1p2pnp1/nB1p4/3P4/1Pr1P2P/P1QB1PP1/2R2RK1 w - - 0 19", "8/1R6/p1pk4/6bp/1QP5/P7/KP6/3r2q1 b - - 2 44", "8/4bkp1/R6P/4p3/Pp2P3/1P1rB3/6P1/6K1 b - - 0 33", "2K5/3P4/5b2/p1B5/P7/3k4/6p1/8 w - - 7 77", "r2qk2r/ppp2ppp/2n1b3/1B1N4/3b4/3P3P/P1P1QPP1/1R2K1NR w Kkq - 4 13", "r4rk1/pp2bppp/2ppnn2/8/N1P1P3/q1P4P/P2N2PB/R2Q1R1K b - - 0 16", "2r3k1/4R1pp/p1p2p2/2p5/2P5/1PbN3P/P4PP1/6K1 w - - 0 25", "1rb1qrk1/6bp/2np4/2pNpp2/2P5/3P1B2/1B3PPP/1R1QR1K1 b - - 0 22", "3r2k1/1q3ppp/p2rp3/Qp1B4/7P/P4P2/1PP3P1/1K1R3R b - - 0 21", "1r2kr2/pp3p1p/2b1pn2/4N3/2P5/1N1B4/P3KP1P/6R1 b - - 4 21", "r6r/pp2kb2/3p1p1Q/1N1Pp3/3bP3/P2B2P1/1P4PP/7K w - - 6 28", "8/5p1k/5Ppb/2p3P1/1p6/8/KB5Q/3q4 b - - 4 58", "7R/8/8/6p1/2p1p1k1/2PbK2p/P7/8 w - - 4 71", "r2k2nr/pp2qBb1/3p3p/Q5p1/3n1B2/2N2R2/PPP3P1/R5K1 b - - 1 18", "8/8/3p4/4kp2/1pP3pP/1RbK2P1/8/8 w - - 2 42", "5r1k/6b1/3p3p/1P1q2pQ/r5P1/3p1N1P/3R2P1/4R2K w - - 2 34", "2r1q1k1/8/b2b1r1p/Pp1pNpp1/3Pn3/1RPQ3P/P1B1NPP1/4R1K1 w - - 3 28", "Q5k1/5q2/p2p4/b1p1pr2/P7/6P1/4KP1R/8 b - - 3 38"];
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
}

function getPieceLocFromFEN(fen){
	let locObj = {
		white: [],
		black: []
	};

	const mainField = fen.split(' ')[0];
	const ranks = mainField.split('/');
	const lowP = "rnbqkp";
	const highP = lowP.toUpperCase();

	for(let rankIdx = 8; rankIdx >= 1; rankIdx--){
		let ranksArr = ranks[8-rankIdx].split('');
		let fileIdx = 1;
		for(let ranksArrIdx = 0; ranksArrIdx < ranksArr.length; ranksArrIdx++){
			if(lowP.indexOf(ranksArr[ranksArrIdx]) >= 0){
				locObj.black.push([fileIdx, rankIdx, ranksArr[ranksArrIdx]]);
				fileIdx++;
			}
			else if(highP.indexOf(ranksArr[ranksArrIdx]) >= 0){
				locObj.white.push([fileIdx, rankIdx, ranksArr[ranksArrIdx]]);
				fileIdx++;
			}
			else
				fileIdx += parseInt(ranksArr[ranksArrIdx]);
		}
	}
	return locObj;
}

function iconify(letter){
	switch(letter){
		case 'r': return '♜';
		case 'n': return '♞';
		case 'b': return '♝';
		case 'q': return '♛';
		case 'k': return '♚';
		case 'p': return '♟︎';
		case 'R': return '♖';
		case 'N': return '♘';
		case 'B': return '♗'; 
		case 'Q': return '♕';
		case 'K': return '♔';
		case 'P': return '♙';
	}
	console.log("Error: Unrecognized letter");
	return letter;
}

function updatePiecesArrToBoardCoords(obj){
	const coordMap = "abcdefgh";
	let newArr = [ [], [] ];
	for(let i = 0; i < obj.white.length; i++){
		let removedIdx = obj.white.shift();
		newArr[0].push("" + iconify(removedIdx[2]) + coordMap.charAt(removedIdx[0]-1) + removedIdx[1]);
	}
	for(let i = 0; i < obj.black.length; i++){
		let removedIdx = obj.black.shift();
		newArr[1].push("" + iconify(removedIdx[2]) + coordMap.charAt(removedIdx[0]-1) + removedIdx[1]);
	}
	return newArr;
}

function loadNextPuzzle(fen){
	let piecesObj = getPieceLocFromFEN(fen)
	let piecesArr = updatePiecesArrToBoardCoords(piecesObj);
	$("#white-pieces-container").html("<h2>White:</h2><h2>" + piecesArr[0].join(" ") + "</h2>");
	$("#black-pieces-container").html("<h2>Black:</h2><h2>" + piecesArr[1].join(" ") + "</h2>");
}

function getFenArrFromCsv(){
	return lichessFens;
}

function getAllFENs(){
	return getFenArrFromCsv();
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
		if(counter > fenArr.length - 1)
			counter = 0;
		loadNextPuzzle(fenArr[counter]);
	});
});

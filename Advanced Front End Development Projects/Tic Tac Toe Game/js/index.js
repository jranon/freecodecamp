$(document).ready(function(){
 
  let s,
  game = {
    
    settings: {
      sq: $('.square'),
      res: $('#reset'),
      playerTurn: null,
      aiTurn: null,
      playerPiece: null,
      aiPiece: null,
      playerValue: -1,
      aiValue: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winCons: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      aiWins: 0,
      playerWins: 0
    },
    
    bindUIActions: function () {
     //click a square, get a prize      
     s.sq.on('click', function () {
       let i = parseInt($(this).attr('id'));
       let j;
       let passPlayer;
       //set value of tile to current player's value
       if (s.playerTurn) {
         j = s.playerPiece;
         passPlayer = s.playerValue;
       } else {
         j = s.aiPiece;
         passPlayer = s.aiValue;
       }
       //impose player value on board
       game.setBoardState(i, passPlayer, j);
       //check the boardstate
       if (!game.checkBoard(s.gameBoard)) game.nextTurn();
       else game.notifyWinner(game.checkBoard());
     });
     
     s.res.on('click', function () {
       const resignation = prompt('Type uncle if you want to give up and reset. The computer wins if you do.');
       if (resignation.toLowerCase() === 'uncle') game.resetBoard();
     });
    },
    
    init: function () {
      s=this.settings;
      this.bindUIActions();
      //ask player if they want to be x or o
      this.getPlayerPiece();
      //start the game
      this.firstTurn();
    },
    
    alertt: function () {
      alert('clicked!');
    },
    
    firstTurn: function (x) {
      //if first game, choose first player at random
      //if not the first game, loser of the last game goes first
      let choice = prompt('Please type H for heads, T for tails');
      choice = choice.toLowerCase();
      if (choice === 'h' || choice === 't') {
        let toss = Math.round(Math.random());
        console.log(toss);
        if (toss === 0) toss = 'h';
        else toss = 't';
        if (toss === choice) s.playerTurn = true;
        else s.aiTurn = true;
      } else this.firstTurn();
    },
    
    nextTurn: function () {
      //to be used when a square is claimed.
      //changes turns
      if (playerTurn) {
        s.playerTurn = null;
        s.aiTurn = true;
      } else {
        s.playerTurn = true;
        s.aiTurn = null;
      }
    },
    
    getPlayerPiece: function () {
      //prompt human player to choose x or o
      //set human player to their choice
      let choice = prompt('Please choose your piece by typing x or o');
      choice = choice.toLowerCase();
      if (choice === 'x' || choice === 'o') {
        s.playerPiece = choice;
        if (s.playerPiece === 'x') s.aiPiece = 'o';
        else s.aiPiece = 'x';
      } else this.getPlayerPiece();
    },
    
    setBoardState: function (tile, playerval, piece) {
      //on claiming a square,
      //sets value of square to the value of whomever claimed it
      //-1 for player, +1 for computer
      s.gameBoard[tile] = playerval;
      //change class of clicked square to claimed,
      //add text to tile according to player's piece
      const id = `#${tile}`;
      $(id).attr('class', 'claimed').text(piece);
    },
    
    resetBoard: function () {
      //clear board state
      s.gameBoard.forEach((tile) => {
        tile = 0;
      });
      //reset tiles to blank
      $('.square').attr('class', 'square').text('');
      //set score
      $('#playerscore').text(s.playerWins);
      $('#aiscore').text(s.aiWins);
    },
    
    checkBoard: function (board) {
      //check for winner
      let winner = null;
      s.winCons.forEach((combo) => {
        let total = 0;
        for (let i = 0; i < combo.length; i++) {
          total += s.gameBoard[combo[i]];
        }
        if (total === 3) {
          winner = s.aiPiece;
          s.aiWins++;
        } else if (total === -3) {
          winner = s.playerPiece;
          s.playerWins++;
        }
      });
      //if none, check if board is full
      //if a tile is empty, return false
      if (!winner) {
        for (let i = 0; i < board.length; i++) {
          if (board[i] === 0) return false;
        }
      } 
      return winner;
    },
    
    notifyWinner: function (piece) {
      let winner;
      if (piece === s.playerPice) {
        winner = 'Player';
      } else {
        winner = 'Computer';
      }
      alert(`${winner} won!`);
      this.resetBoard();
    }
    
  };
  
  //game.getPlayerPiece();
  game.init();
  
      
});
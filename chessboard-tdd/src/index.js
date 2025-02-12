const Chessboard = require('./chessboard');

const chessboard = new Chessboard();
chessboard.placePiece(0, 0, 'Q');
chessboard.placePiece(1, 1, 'Q');
chessboard.printBoard();
const Chessboard = require('./chessboard');

const chessboard = new Chessboard(4);
chessboard.solveNQueens();
chessboard.printSolutions();
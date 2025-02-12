class Chessboard {
    constructor() {
        this.board = [];
        this.initialize();
    }

    initialize() {
        this.board = Array(4).fill(null).map(() => Array(4).fill(null));
    }

    placePiece(row, col, piece) {
        if (this.isValidPosition(row, col)) {
            this.board[row][col] = piece;
        } else {
            throw new Error('Invalid position');
        }
    }

    removePiece(row, col) {
        if (this.isValidPosition(row, col)) {
            this.board[row][col] = null;
        } else {
            throw new Error('Invalid position');
        }
    }

    isValidPosition(row, col) {
        return row >= 0 && row < 4 && col >= 0 && col < 4;
    }

    getBoard() {
        return this.board;
    }

    printBoard() {
        for (let row of this.board) {
            console.log(row.map(cell => cell === null ? 'O' : cell).join(''));
        }
    }
}

module.exports = Chessboard;
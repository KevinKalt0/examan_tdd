class Chessboard {
    constructor(size) {
        this.size = size;
        this.board = [];
        this.initialize();
    }

    initialize() {
        this.board = Array(this.size).fill(null).map(() => Array(this.size).fill('O'));
    }

    getBoard() {
        return this.board;
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
            this.board[row][col] = 'O';
        } else {
            throw new Error('Invalid position');
        }
    }

    isValidPosition(row, col) {
        return row >= 0 && row < this.size && col >= 0 && col < this.size;
    }
}

module.exports = Chessboard;
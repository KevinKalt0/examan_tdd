class Chessboard {
    constructor(size) {
        this.size = size;
        this.board = [];
        this.solutions = [];
        this.initialize();
    }

    initialize() {
        this.board = Array(this.size).fill(null).map(() => Array(this.size).fill('O'));
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

    isSafe(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (this.board[i][col] === '#') {
                return false;
            }
        }

        // Check upper left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (this.board[i][j] === '#') {
                return false;
            }
        }

        // Check upper right diagonal
        for (let i = row, j = col; i >= 0 && j < this.size; i--, j++) {
            if (this.board[i][j] === '#') {
                return false;
            }
        }

        return true;
    }

    getBoard() {
        return this.board;
    }

    printBoard() {
        for (let row of this.board) {
            console.log(row.join(''));
        }
    }

    printSolutions() {
        for (let solution of this.solutions) {
            for (let row of solution) {
                console.log(row.join(''));
            }
            console.log('');
        }
    }
}

module.exports = Chessboard;


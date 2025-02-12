class Chessboard {
    constructor(size) {
        this.size = size;
        this.board = [];
        this.solutions = [];
        this.initialize();
    }

    initialize() {
        this.board = Array(this.size).fill(null).map(() => Array(this.size).fill(null));
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
        return row >= 0 && row < this.size && col >= 0 && col < this.size;
    }

    isSafeQueen(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (this.board[i][col] === 'Q') {
                return false;
            }
        }

        // Check upper left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (this.board[i][j] === 'Q') {
                return false;
            }
        }

        // Check upper right diagonal
        for (let i = row, j = col; i >= 0 && j < this.size; i--, j++) {
            if (this.board[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }

    solveNQueens(row = 0) {
        if (row === this.size) {
            this.solutions.push(this.board.map(r => r.slice()));
            return;
        }

        for (let col = 0; col < this.size; col++) {
            if (this.isSafe(row, col)) {
                this.placePiece(row, col, 'Q');
                this.solveNQueens(row + 1);
                this.removePiece(row, col);
            }
        }
    }

    getSolutions() {
        return this.solutions;
    }

    getBoard() {
        return this.board;
    }

    printBoard() {
        for (let row of this.board) {
            console.log(row.map(cell => cell === null ? 'O' : cell).join(''));
        }
    }

    printSolutions() {
        for (let solution of this.solutions) {
            for (let row of solution) {
                console.log(row.map(cell => cell === null ? 'O' : cell).join(''));
            }
            console.log('');
        }
    }
}

module.exports = Chessboard;
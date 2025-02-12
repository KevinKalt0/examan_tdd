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

    placePiece(row, col) {
        this.board[row][col] = '#';
    }

    removePiece(row, col) {
        this.board[row][col] = 'O';
    }

    isValidPosition(row, col) {
        return row >= 0 && row < this.size && col >= 0 && col < this.size;
    }

    isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (this.board[i][col] === '#') return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (this.board[i][j] === '#') return false;
        }
        for (let i = row, j = col; i >= 0 && j < this.size; i--, j++) {
            if (this.board[i][j] === '#') return false;
        }        
        return true;
    }

    solveNQueens(row = 0) {
        if (row === this.size) {
            this.solutions.push(this.board.map(row => [...row].join('')));
            return;
        }

        for (let col = 0; col < this.size; col++) {
            if (this.isSafe(row, col)) {
                this.placePiece(row, col);
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
        this.board.forEach(row => console.log(row.join('')));
    }

    printSolutions() {
        this.solutions.forEach(solution => {
            console.log(solution.join('\n') + '\n');
        });
    }
    
}

module.exports = Chessboard;

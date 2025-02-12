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
}

module.exports = Chessboard;
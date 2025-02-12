const Chessboard = require('../chessboard');

describe('Chessboard', () => {
    let chessboard;

    beforeEach(() => {
        chessboard = new Chessboard(4);
    });

    test('should initialize an empty 4x4 board', () => {
        const expectedBoard = [
            ['O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O']
        ];
        expect(chessboard.getBoard()).toEqual(expectedBoard);
    });

    test('should place a piece on the board', () => {
        chessboard.placePiece(0, 0, '#');
        expect(chessboard.getBoard()[0][0]).toBe('#');
    });

    test('should remove a piece from the board', () => {
        chessboard.placePiece(0, 0, '#');
        chessboard.removePiece(0, 0);
        expect(chessboard.getBoard()[0][0]).toBe('O');
    });

    test('should return true for a safe position', () => {
        chessboard.placePiece(0, 0, '#');
        expect(chessboard.isSafeQueen(1, 1)).toBe(false);
        expect(chessboard.isSafeQueen(1, 2)).toBe(true);
    });
});
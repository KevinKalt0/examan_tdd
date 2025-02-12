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
});
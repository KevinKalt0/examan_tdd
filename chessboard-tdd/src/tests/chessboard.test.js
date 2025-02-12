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
        chessboard.placePiece(0, 0);
        expect(chessboard.getBoard()[0][0]).toBe('#');
    });

    test('should remove a piece from the board', () => {
        chessboard.placePiece(0, 0);
        chessboard.removePiece(0, 0);
        expect(chessboard.getBoard()[0][0]).toBe('O');
    });

    test('should return true for a safe position', () => {
        chessboard.placePiece(0, 0);
        expect(chessboard.isSafe(1, 1)).toBe(false);
        expect(chessboard.isSafe(1, 2)).toBe(true);
    });

    test('should print the board', () => {
        console.log = jest.fn();
        chessboard.printBoard();
        expect(console.log).toHaveBeenCalledWith('OOOO');
        expect(console.log).toHaveBeenCalledWith('OOOO');
        expect(console.log).toHaveBeenCalledWith('OOOO');
        expect(console.log).toHaveBeenCalledWith('OOOO');
    });

    test('should print the solutions', () => {
        chessboard.solutions = [
            [
                "#OOO",
                "OO#O",
                "OOO#",
                "O#OO"
            ],
            [
                "O#OO",
                "OOO#",
                "#OOO",
                "OO#O"
            ]
        ];
        console.log = jest.fn();
        chessboard.printSolutions();

        const expectedCalls = [
            "#OOO\nOO#O\nOOO#\nO#OO\n",
            "O#OO\nOOO#\n#OOO\nOO#O\n"
        ];

        expectedCalls.forEach(call => {
            expect(console.log).toHaveBeenCalledWith(call);
        });
    });

    // ✅ NEW TEST: Check N-Queens solver
    test('should solve the 4-queens problem', () => {
        chessboard.solveNQueens();
        const solutions = chessboard.getSolutions();
        expect(solutions.length).toBe(2);

        const expectedSolutions = [
            [
                "#OOO",
                "OO#O",
                "OOO#",
                "O#OO"
            ],
            [
                "O#OO",
                "OOO#",
                "#OOO",
                "OO#O"
            ]
        ];

        const sortedSolutions = solutions.map(sol => sol.slice().sort()).sort();
        const sortedExpectedSolutions = expectedSolutions.map(sol => sol.slice().sort()).sort();

        expect(sortedSolutions).toEqual(sortedExpectedSolutions);

    });
});

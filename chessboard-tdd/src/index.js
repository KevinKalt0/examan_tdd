const Chessboard = require('./chessboard');

const chessboard = new Chessboard(4);
chessboard.solutions = [
    [
        ['#', 'O', 'O', 'O'],
        ['O', 'O', '#', 'O'],
        ['O', 'O', 'O', '#'],
        ['O', '#', 'O', 'O']
    ],
    [
        ['O', '#', 'O', 'O'],
        ['O', 'O', 'O', '#'],
        ['#', 'O', 'O', 'O'],
        ['O', 'O', '#', 'O']
    ]
];
chessboard.printSolutions();
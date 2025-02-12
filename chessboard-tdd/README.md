# Chessboard TDD

This project implements a simple 4x4 chessboard using Test-Driven Development (TDD) principles. The chessboard allows for the placement and removal of pieces, and is designed to be easily extensible for future features.

## Project Structure

```
chessboard-tdd
├── src
│   ├── chessboard.js        # Implementation of the Chessboard class
│   └── tests
│       └── chessboard.test.js # Unit tests for the Chessboard class
├── package.json             # npm configuration file
├── jest.config.js           # Jest configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd chessboard-tdd
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the tests:
   ```
   npm test
   ```

## Usage

To use the `Chessboard` class, you can import it in your JavaScript file:

```javascript
import { Chessboard } from './src/chessboard';

const chessboard = new Chessboard();
chessboard.initialize();
chessboard.placePiece('Knight', 0, 0);
chessboard.removePiece(0, 0);
```

## Contributing

Feel free to submit issues or pull requests for improvements or additional features. 

## License

This project is licensed under the MIT License.
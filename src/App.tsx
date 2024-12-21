import { Board } from './components/Board';
import { GameStatus } from './components/GameStatus';
import { useGameState } from './hooks/useGameState';

function App() {
  const { gameState, makeMove, resetGame } = useGameState();
  const { board, currentPlayer, winner, isDraw } = gameState;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Tic Tac Toe</h1>
        
        <GameStatus
          winner={winner}
          isDraw={isDraw}
          currentPlayer={currentPlayer}
        />

        <Board
          board={board}
          onSquareClick={makeMove}
        />

        <button
          onClick={resetGame}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md
            hover:bg-indigo-700 transition-colors duration-200"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
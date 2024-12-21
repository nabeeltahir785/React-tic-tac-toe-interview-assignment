import { useState, useCallback } from 'react';
import { BoardState, GameState } from '../types/game';
import { checkWinner, checkDraw, getInitialBoard } from '../utils/gameLogic';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: getInitialBoard(),
    currentPlayer: 'X',
    winner: null,
    isDraw: false
  });

  const makeMove = useCallback((index: number) => {
    setGameState(prevState => {
      if (prevState.board[index] || prevState.winner || prevState.isDraw) {
        return prevState;
      }

      const newBoard: BoardState = [...prevState.board];
      newBoard[index] = prevState.currentPlayer;

      const winner = checkWinner(newBoard);
      const isDraw = !winner && checkDraw(newBoard);

      return {
        board: newBoard,
        currentPlayer: prevState.currentPlayer === 'X' ? 'O' : 'X',
        winner,
        isDraw
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      board: getInitialBoard(),
      currentPlayer: 'X',
      winner: null,
      isDraw: false
    });
  }, []);

  return {
    gameState,
    makeMove,
    resetGame
  };
};
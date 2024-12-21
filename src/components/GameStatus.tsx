import React from 'react';
import { Player } from '../types/game';

interface GameStatusProps {
  winner: Player | null;
  isDraw: boolean;
  currentPlayer: Player;
}

export const GameStatus: React.FC<GameStatusProps> = ({
  winner,
  isDraw,
  currentPlayer
}) => {
  let status: string;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${currentPlayer}`;
  }

  return (
    <div className={`text-2xl font-bold mb-4 
      ${winner ? 'text-green-600' : 
        isDraw ? 'text-gray-600' : 
        currentPlayer === 'X' ? 'text-blue-600' : 'text-red-600'}`}>
      {status}
    </div>
  );
};
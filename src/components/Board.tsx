import React from 'react';
import { Square } from './Square';
import { BoardState } from '../types/game';

interface BoardProps {
  board: BoardState;
  onSquareClick: (index: number) => void;
}

export const Board: React.FC<BoardProps> = ({ board, onSquareClick }) => (
  <div className="grid grid-cols-3 gap-2">
    {board.map((value, index) => (
      <Square
        key={index}
        value={value}
        onClick={() => onSquareClick(index)}
      />
    ))}
  </div>
);
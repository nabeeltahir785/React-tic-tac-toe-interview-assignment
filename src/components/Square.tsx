import React from 'react';
import { Player } from '../types/game';

interface SquareProps {
  value: Player | null;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button
    onClick={onClick}
    className={`
      w-20 h-20 border-2 border-gray-300 text-4xl font-bold
      transition-colors duration-200
      ${value ? 'cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}
      ${value === 'X' ? 'text-blue-600' : 'text-red-600'}
    `}
  >
    {value}
  </button>
);
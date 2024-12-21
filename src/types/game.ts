export type Player = 'X' | 'O';
export type BoardState = (Player | null)[];
export type WinningCombination = number[];

export interface GameState {
  board: BoardState;
  currentPlayer: Player;
  winner: Player | null;
  isDraw: boolean;
}
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useGameState } from '../useGameState';

describe('useGameState', () => {
    it('should initialize with empty board and X as first player', () => {
        const { result } = renderHook(() => useGameState());
        expect(result.current.gameState.board).toEqual(Array(9).fill(null));
        expect(result.current.gameState.currentPlayer).toBe('X');
        expect(result.current.gameState.winner).toBe(null);
        expect(result.current.gameState.isDraw).toBe(false);
    });

    it('should make move and switch players', () => {
        const { result } = renderHook(() => useGameState());

        act(() => {
            result.current.makeMove(0);
        });

        expect(result.current.gameState.board[0]).toBe('X');
        expect(result.current.gameState.currentPlayer).toBe('O');
    });

    it('should detect winner', () => {
        const { result } = renderHook(() => useGameState());

        // X wins with top row
        act(() => {
            result.current.makeMove(0); // X
            result.current.makeMove(3); // O
            result.current.makeMove(1); // X
            result.current.makeMove(4); // O
            result.current.makeMove(2); // X
        });

        expect(result.current.gameState.winner).toBe('X');
    });

    it('should reset game state', () => {
        const { result } = renderHook(() => useGameState());

        act(() => {
            result.current.makeMove(0);
            result.current.resetGame();
        });

        expect(result.current.gameState.board).toEqual(Array(9).fill(null));
        expect(result.current.gameState.currentPlayer).toBe('X');
        expect(result.current.gameState.winner).toBe(null);
        expect(result.current.gameState.isDraw).toBe(false);
    });
});
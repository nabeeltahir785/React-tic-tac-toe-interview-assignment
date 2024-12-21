import { describe, it, expect } from 'vitest';
import { checkWinner, checkDraw, getInitialBoard } from '../gameLogic';
import { BoardState } from '../../types/game';

describe('gameLogic', () => {
    describe('checkWinner', () => {
        it('should detect horizontal win', () => {
            const board: BoardState = [
                'X', 'X', 'X',
                null, 'O', 'O',
                null, null, null
            ];
            expect(checkWinner(board)).toBe('X');
        });

        it('should detect vertical win', () => {
            const board: BoardState = [
                'O', 'X', null,
                'O', 'X', null,
                'O', null, null
            ];
            expect(checkWinner(board)).toBe('O');
        });

        it('should detect diagonal win', () => {
            const board: BoardState = [
                'X', 'O', null,
                'O', 'X', null,
                null, 'O', 'X'
            ];
            expect(checkWinner(board)).toBe('X');
        });

        it('should return null when no winner', () => {
            const board: BoardState = [
                'X', 'O', 'X',
                'O', 'X', 'O',
                'O', 'X', null
            ];
            expect(checkWinner(board)).toBe(null);
        });
    });

    describe('checkDraw', () => {
        it('should detect draw when board is full', () => {
            const board: BoardState = [
                'X', 'O', 'X',
                'O', 'X', 'O',
                'O', 'X', 'O'
            ];
            expect(checkDraw(board)).toBe(true);
        });

        it('should return false when board is not full', () => {
            const board: BoardState = [
                'X', 'O', 'X',
                'O', 'X', 'O',
                'O', 'X', null
            ];
            expect(checkDraw(board)).toBe(false);
        });
    });

    describe('getInitialBoard', () => {
        it('should return empty board with 9 null cells', () => {
            const board = getInitialBoard();
            expect(board).toHaveLength(9);
            expect(board.every(cell => cell === null)).toBe(true);
        });
    });
});
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Board } from '../Board';
import { BoardState } from '../../types/game';

describe('Board', () => {
    it('should render empty board', () => {
        const board: BoardState = Array(9).fill(null);
        const { container } = render(
            <Board board={board} onSquareClick={() => {}} />
    );
        expect(container.querySelectorAll('button')).toHaveLength(9);
    });

    it('should call onSquareClick with correct index', () => {
        const board: BoardState = Array(9).fill(null);
        const onSquareClick = vi.fn();
        const { container } = render(
            <Board board={board} onSquareClick={onSquareClick} />
    );

        fireEvent.click(container.querySelectorAll('button')[4]);
        expect(onSquareClick).toHaveBeenCalledWith(4);
    });
});
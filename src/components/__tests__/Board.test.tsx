import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Board } from '../Board';
import { BoardState } from '../../types/game';

describe('Board', () => {
    it('should render empty board', () => {
        const board: BoardState = Array(9).fill(null);
        const { container } = render(
            <Board board={board} onSquareClick={() => {}} />
    );

        const squares = container.querySelectorAll('button');
        expect(squares).toHaveLength(9);
        squares.forEach(square => {
            expect(square.textContent).toBe('');
        });
    });

    it('should render board with X and O markers', () => {
        const board: BoardState = [
            'X', 'O', null,
            null, 'X', 'O',
            null, null, 'X'
        ];
        render(<Board board={board} onSquareClick={() => {}} />);

        const squares = screen.getAllByRole('button');
        expect(squares[0].textContent).toBe('X');
        expect(squares[1].textContent).toBe('O');
        expect(squares[2].textContent).toBe('');
        expect(squares[4].textContent).toBe('X');
        expect(squares[5].textContent).toBe('O');
        expect(squares[8].textContent).toBe('X');
    });

    it('should call onSquareClick with correct index when square is clicked', () => {
        const board: BoardState = Array(9).fill(null);
        const onSquareClick = vi.fn();
        render(<Board board={board} onSquareClick={onSquareClick} />);

        const squares = screen.getAllByRole('button');
        fireEvent.click(squares[4]); // Click middle square

        expect(onSquareClick).toHaveBeenCalledTimes(1);
        expect(onSquareClick).toHaveBeenCalledWith(4);
    });

    it('should maintain square positions in 3x3 grid layout', () => {
        const board: BoardState = Array(9).fill(null);
        const { container } = render(
            <Board board={board} onSquareClick={() => {}} />
    );

        const boardElement = container.firstChild;
        expect(boardElement).toHaveClass('grid', 'grid-cols-3', 'gap-2');
    });
});
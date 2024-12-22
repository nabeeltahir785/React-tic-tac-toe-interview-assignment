import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { GameStatus } from '../GameStatus';

describe('GameStatus', () => {
    it('should show current player when game is ongoing', () => {
        const { container } = render(
            <GameStatus winner={null} isDraw={false} currentPlayer="X" />
    );
        expect(container.textContent).toContain('Next player: X');
    });

    it('should show winner when game is won', () => {
        const { container } = render(
            <GameStatus winner="O" isDraw={false} currentPlayer="X" />
    );
        expect(container.textContent).toContain('Winner: O');
    });

    it('should show draw message when game is drawn', () => {
        const { container } = render(
            <GameStatus winner={null} isDraw={true} currentPlayer="X" />
    );
        expect(container.textContent).toContain("It's a draw!");
    });
});
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Square } from '../Square';

describe('Square', () => {
    it('should render empty square', () => {
        const { container } = render(<Square value={null} onClick={() => {}} />);
        expect(container.textContent).toBe('');
    });

    it('should render X', () => {
        const { container } = render(<Square value="X" onClick={() => {}} />);
        expect(container.textContent).toBe('X');
    });

    it('should render O', () => {
        const { container } = render(<Square value="O" onClick={() => {}} />);
        expect(container.textContent).toBe('O');
    });

    it('should call onClick when clicked', () => {
        const onClick = vi.fn();
        const { container } = render(<Square value={null} onClick={onClick} />);
        fireEvent.click(container.firstChild!);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
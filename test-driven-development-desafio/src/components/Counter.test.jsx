import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Componente Counter', () => {
  it('deve renderizar o valor inicial 0', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('deve incrementar o contador ao clicar no botão', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const button = screen.getByRole('button', { name: /incrementar/i });
    await user.click(button);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
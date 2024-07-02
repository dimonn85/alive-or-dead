import React from 'react';
import { render } from '@testing-library/react';
import Cell from './Cell';

describe('Cell component', () => {
  test('renders cell with correct class when cell is alive', () => {
    const { container: aliveContainer } = render(<Cell isAlive={true} />);

    expect(aliveContainer.firstChild).toHaveClass('alive');
  });

  test('renders cell with correct class when cell is dead', () => {
    const { container: deadContainer } = render(<Cell isAlive={false} />);

    expect(deadContainer.firstChild).toHaveClass('dead');
  });
});
import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';
import { GridProps } from '../../interfaces';

/**
 * Mock Cell component for testing
 */
jest.mock('../Cell/Cell', () => ({ isAlive }: { isAlive: boolean }) => <div data-testid="cell" className={isAlive ? 'alive' : 'dead'}></div>);

const mockGrid: GridProps['grid'] = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

describe('Grid component', () => {
  test('renders grid with correct number of rows and cells', () => {
    const { container } = render(<Grid grid={mockGrid} />);

    // Checking that the number of rows matches the number of rows in mockGrid.
    const rows = container.querySelectorAll('[data-testid="row"]');
    expect(rows.length).toBe(mockGrid.length);

    // Checking that the number of cells matches the number of elements in mockGrid.
    const cells = container.querySelectorAll('[data-testid="cell"]');
    expect(cells.length).toBe(mockGrid.length * mockGrid[0].length);
  });

  test('renders cells with correct class based on isAlive prop', () => {
    const { container } = render(<Grid grid={mockGrid} />);
    const cells = container.querySelectorAll('[data-testid="cell"]');

    cells.forEach((cell, index) => {
      const row = Math.floor(index / mockGrid[0].length);
      const col = index % mockGrid[0].length;
      const isAlive = mockGrid[row][col];

      if (isAlive) {
        expect(cell).toHaveClass('alive');
      } else {
        expect(cell).toHaveClass('dead');
      }
    });
  });
});
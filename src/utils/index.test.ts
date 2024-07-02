import { generateInitialGrid, getNextGridState } from './index';

// Testing the function for generating the initial grid.
describe('generateInitialGrid', () => {
  it('should generate a grid with the correct dimensions', () => {
    const numRows = 5;
    const numCols = 5;
    const grid = generateInitialGrid(numRows, numCols);
    expect(grid.length).toBe(numRows);
    grid.forEach(row => {
      expect(row.length).toBe(numCols);
    });
  });

  it('should generate a grid with values 0 or 1', () => {
    const numRows = 5;
    const numCols = 5;
    const grid = generateInitialGrid(numRows, numCols);
    grid.forEach(row => {
      row.forEach(cell => {
        expect(cell === 0 || cell === 1).toBe(true);
      });
    });
  });

  it('should generate different grids on subsequent calls', () => {
    const numRows = 5;
    const numCols = 5;
    const grid1 = generateInitialGrid(numRows, numCols);
    const grid2 = generateInitialGrid(numRows, numCols);
    // It's possible but highly unlikely that the two grids are the same
    expect(grid1).not.toEqual(grid2);
  });
});

// Testing the function for calculating the next state of the grid.
describe('getNextGridState', () => {
  it('should correctly calculate the next grid state', () => {
    const initialGrid = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const expectedNextGrid = [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const nextGrid = getNextGridState(initialGrid);
    expect(nextGrid).toEqual(expectedNextGrid);
  });

  it('should handle edge cases correctly', () => {
    const initialGrid = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];

    const expectedNextGrid = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];

    const nextGrid = getNextGridState(initialGrid);
    expect(nextGrid).toEqual(expectedNextGrid);
  });
});
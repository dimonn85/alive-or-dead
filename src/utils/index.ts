/**
 * A function for generating the initial grid with a random arrangement of living and dead cells.
 */
export const generateInitialGrid = (numRows: number, numCols: number): number[][] =>
  // Create an array with the number of rows equal to numRows.
  Array.from({ length: numRows }, () =>
    // For each row, create an array with the number of columns equal to numCols.
    Array.from({ length: numCols }, () =>
      // For each cell, generate a random number and check if it is greater than 0.7.
      // If it is greater, the cell is alive (1); otherwise, it is dead (0).
      Math.random() > 0.7 ? 1 : 0
    )
  );

export const getNextGridState = (grid: number[][]): number[][] => {
  const numRows = grid.length;
  const numCols = grid[0].length;
  // Create a copy of the current grid.
  const newGrid = grid.map(arr => [...arr]);

  // A function to count the living neighbors of the cell (x, y).
  const getAliveNeighbors = (x: number, y: number): number => {
    // Determine all possible directions for neighbors.
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],  // Neighbors above
      [0, -1], /*cell*/ [0, 1],   // Neighbors to the left and right
      [1, -1],  [1, 0],  [1, 1]    // Neighbors below
    ];
    // We use reduce to count the number of live neighbors.
    return directions.reduce((acc, [dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;
      // Check if the neighbor is within the grid boundaries
      if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
        // If the neighbor is a live cell, increase the counter.
        return acc + (grid[newX][newY] ? 1 : 0);
      }
      return acc;
    }, 0);
  };

  // We iterate through each cell in the grid.
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // We obtain the number of live neighbors for the current cell
      const aliveNeighbors = getAliveNeighbors(i, j);
      // If the cell is alive...
      if (grid[i][j]) {
        // ...If the cell is alive and has fewer than two or more than three live neighbors, it dies
        if (aliveNeighbors < 2 || aliveNeighbors > 3) {
          newGrid[i][j] = 0;
        }
      } else {
        // If the cell is dead and has exactly three live neighbors, it comes to life
        if (aliveNeighbors === 3) {
          newGrid[i][j] = 1;
        }
      }
    }
  }

  return newGrid;
};

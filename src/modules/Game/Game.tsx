import { useState, useEffect, FC } from 'react';
import Grid from '../../components/Grid/Grid';
import { generateInitialGrid, getNextGridState } from '../../utils';
import styles from './Game.module.scss';
import { NUM_COLS, NUM_ROWS } from "../../constants";

/**
 * Explanation
 *
 * 1. Grid Initialization:
 *
 * - Determine the number of rows and columns.
 * - Create a copy of the current grid for modifications.

 * 2. Counting Living Neighbors:
 *
 * - For each cell in the grid, check 8 possible neighbors (including diagonals).
 * - Check if the neighbor is within the grid boundaries and if it is alive.

 * 3. Applying the Game Rules:
 *
 * - Go through each cell in the grid.
 * - If a cell is alive and has fewer than two or more than three living neighbors, it dies.
 * - If a cell is dead and has exactly three living neighbors, it becomes alive.
 *
 * 4. Returning the New Grid:
 *
 * - Return the updated grid with the applied rules.
 */

const Game: FC = () => {
  const [grid, setGrid] = useState<number[][]>(generateInitialGrid(NUM_ROWS, NUM_COLS));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid => getNextGridState(prevGrid));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.game}>
      <h1>Test Game of Life</h1>
      <Grid grid={grid}/>
    </div>
  );
};

export default Game;
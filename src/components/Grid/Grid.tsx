import { FC } from 'react';
import Cell from '../Cell/Cell';
import styles from './Grid.module.scss';
import { GridProps } from '../../interfaces';

const Grid: FC<GridProps> = ({ grid }) => {
  return (
    <div className={styles.grid}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row} data-testid="row">
          {row.map((isAlive, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} isAlive={!!isAlive} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
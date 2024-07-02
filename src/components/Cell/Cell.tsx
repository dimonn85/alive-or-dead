import { FC } from 'react';
import styles from './Cell.module.scss';
import { CellProps } from '../../interfaces';

const Cell: FC<CellProps> = ({ isAlive }) => {
  return (
    <div className={`${styles.cell} ${isAlive ? styles.alive : styles.dead}`}/>
  );
};

export default Cell;
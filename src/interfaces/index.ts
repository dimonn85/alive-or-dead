export interface CellProps {
  isAlive: boolean,
}

export interface GridProps {
  grid: number[][];
}

export interface ControlsProps {
  isRunning: boolean;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
}
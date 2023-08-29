export type GameStates = 'WAITING' | 'GRAPHING' | 'COMPLETED';

export const STATUS_GAME: Record<GameStates, GameStates> = {
  WAITING: 'WAITING',
  GRAPHING: 'GRAPHING',
  COMPLETED: 'COMPLETED',
};

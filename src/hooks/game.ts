import { useAppSelector } from './store';

export const useGame = () => {
  return useAppSelector((state) => state.game);
};

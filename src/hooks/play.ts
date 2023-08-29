import { useAppDispatch } from './store';
import { setToPlay, setRandomNumber, resetBet } from '../store/reducers/game.reducer';
import { STATUS_GAME } from '../utils/types';
import { useEffect } from 'react';
import { useGame } from './game';

export const usePlay = (timeCompleted = 5000) => {
  const dispatch = useAppDispatch();
  const game = useGame();

  useEffect(() => {
    const updateStatus = (status: string) => dispatch(setToPlay(status));
    let timeoutId = -1;
    let timeoutNumber = -1;

    if (game.status === STATUS_GAME.WAITING) updateStatus(STATUS_GAME.GRAPHING);

    if (game.status === STATUS_GAME.GRAPHING) {
      timeoutNumber = setInterval(() => dispatch(setRandomNumber()), 100);
      timeoutId = setTimeout(() => updateStatus(STATUS_GAME.COMPLETED), 8000);
    }
    if (game.status === STATUS_GAME.COMPLETED) {
      clearTimeout(timeoutNumber);
      dispatch(resetBet());
      timeoutId = setTimeout(() => updateStatus(STATUS_GAME.WAITING), timeCompleted);
    }
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutNumber);
    };
  }, [game.status, dispatch, timeCompleted]);
};

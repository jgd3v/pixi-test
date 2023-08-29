import { createSlice } from '@reduxjs/toolkit';
import { GameStates } from '../../utils/types';

interface HistoricalValues {
  userName: string;
  amount: number;
  payout: number;
  balance: number;
}

interface InitialState {
  status: GameStates;
  historical: Array<HistoricalValues>;
  multiplier: Array<number>;
  randomNumber: number;
  hasBetActive: boolean;
}

const initialState: InitialState = {
  status: 'WAITING',
  historical: [],
  multiplier: [],
  randomNumber: Math.random() * 100 + 1,
  hasBetActive: false,
};

const game = createSlice({
  name: 'gameReducer',
  initialState,
  reducers: {
    setToPlay(state, { payload }) {
      return { ...state, status: payload };
    },
    setRandomNumber(state) {
      return { ...state, randomNumber: Math.random() * 100 + 1 };
    },
    bet(state, { payload }) {
      return { ...state, historical: [...state.historical, payload], hasBetActive: true };
    },
    resetBet(state) {
      return { ...state, hasBetActive: false };
    },
  },
});

export const { setToPlay, setRandomNumber, bet, resetBet } = game.actions;

export default game.reducer;

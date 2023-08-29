import { createSlice } from '@reduxjs/toolkit';
import { GameStates } from '../../utils/types';

interface HistoricalValues {
  userName: string;
  amount: number;
  payout: number;
  win: boolean;
}

interface InitialState {
  status: GameStates;
  historical: Array<HistoricalValues>;
  multiplier: Array<number>;
  randomNumber: number;
  hasBetActive: boolean;
  winner: boolean;
}

const initialState: InitialState = {
  status: 'WAITING',
  historical: [],
  multiplier: [],
  randomNumber: 1,
  hasBetActive: false,
  winner: false,
};

const game = createSlice({
  name: 'gameReducer',
  initialState,
  reducers: {
    setToPlay(state, { payload }) {
      return { ...state, status: payload };
    },
    setRandomNumber(state) {
      return { ...state, randomNumber: state.randomNumber + Math.random() * 0.1 };
    },
    bet(state, { payload }) {
      return { ...state, historical: [...state.historical, { ...payload, win: false }], hasBetActive: true };
    },
    win(state, { payload }) {
      return {
        ...state,
        historical: [
          ...state.historical.map((post, index) =>
            index === payload.index ? { ...post, payout: payload.payout, win: true } : post
          ),
        ],
        winner: true,
      };
    },
    resetBet(state) {
      return {
        ...state,
        multiplier: [...state.multiplier, state.randomNumber],
        hasBetActive: false,
        randomNumber: 1,
        winner: false,
      };
    },
  },
});

export const { setToPlay, setRandomNumber, bet, resetBet, win } = game.actions;

export default game.reducer;

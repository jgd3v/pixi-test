import { configureStore, combineReducers } from '@reduxjs/toolkit';
// reducers
import game from './reducers/game.reducer';

// Root reducer (Combination multiples reducers)
const rootReducer = combineReducers({
  game,
});

// Store Instantiation
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
// reducers
import game from './reducers/game.reducer';

// Root reducer (Combination multiples reducers)
const rootReducer = combineReducers({
  game,
});

// Middleware Configuration
const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: () => true,
});

const middleware = [loggerMiddleware];

// Store Instantiation
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from '@reduxjs/toolkit';
import { GAME_START, GAME_ACTION } from '../utils/urls';
import { loader } from './loader';

const game = createSlice({
  // every slice needs 3 properties: name, initialState and reducer
  name: 'game',
  // initialstate is always an object
  initialState: {
    userName: null,
    gameStatus: null,
    history: [],
    //previousStep[],
  },
  // Each reducer is a property which is a function
  // an object where each property is one method to update the store
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setGameStatus: (state, action) => {
      state.history = [...state.history, state.gameStatus];
      state.gameStatus = action.payload;
    },
    setGoBack: (state, action) => {
      if (state.history.length > 1) {
        state.gameStatus = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
      } else {
        alert('You need to take a step before you can go back!');
      }
    },
  },
});

//Fetching the game start and dispatching loader while waiting for fetch
export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(loader.actions.setLoading(true));
    fetch(GAME_START, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.userName }), //check options here
    })
      .then((res) => res.json())
      .then((json) => dispatch(game.actions.setGameStatus(json)))
      .finally(() => dispatch(loader.actions.setLoading(false)));
  };
};
//Fetching the next move and dispatching loader while waiting for fetch
export const fetchNextMove = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(loader.actions.setLoading(true));
    fetch(GAME_ACTION, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.userName,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => dispatch(game.actions.setGameStatus(json)))
      .finally(() => dispatch(loader.actions.setLoading(false)));
  };
};

export default game;

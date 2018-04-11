import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util.js';
import { createBoard, fetchBoards, deleteBoard, updateBoard } from './actions/board_actions';
import {createListItem} from './actions/list_item_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if(window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.store = store;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root );
});

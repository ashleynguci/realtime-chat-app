console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import React from 'react';
import Container from './Container';

const socket = io("http://192.168.0.107:3001");
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "message":
      return { ...state, message: action.data };
    default:
      return state;
  }
}
const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
  console.log("new state", store.getState());
});
store.dispatch({ type: "server/hello", data: "Hello!" });

export default function App() {
  return (
    <Container />
  );
}



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer, { initialState } from "./GoogleClone/homeComponents/reducer";
import { StateProvider } from "./GoogleClone/homeComponents/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
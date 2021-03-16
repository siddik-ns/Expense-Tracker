import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "./context/context";
import {SpeechProvider} from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="99774cdc-e990-4c7a-9757-227da021f3ac" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

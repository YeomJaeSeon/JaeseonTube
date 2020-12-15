import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Youtube from './services/youtube.js';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});
const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStateProvider } from './pages/GlobalStateProvider'; // 이 줄을 추가합니다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>  {/* 이 줄을 추가합니다. */}
      <App />
    </GlobalStateProvider>  {/* 이 줄을 추가합니다. */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

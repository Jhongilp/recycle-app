import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlgmBqO-V3FbkhzzsvTjZKHWbPQQrnn3M",
  authDomain: "recycle-app-a8187.firebaseapp.com",
  projectId: "recycle-app-a8187",
  storageBucket: "recycle-app-a8187.appspot.com",
  messagingSenderId: "725533288094",
  appId: "1:725533288094:web:67b16ca31658986d843d8f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

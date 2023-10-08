/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import './App.css';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';

console.log(process.env.NODE_ENV);

const a = 59;

function App() {
  const fn = () => {
    getLoginQrCKey()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <Button onClick={fn}>按钮</Button>;
}

export default App;

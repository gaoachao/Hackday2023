import { useState } from 'react';
import "./index.scss";

import TopBar from '@components/TopBar';
import Home from "@pages/Home";
import Main from '@pages/Main';

function App() {
  return (
    <div className='h-container'>
      <TopBar/>
      <Home/>
      <Main/>
    </div>
  )
}

export default App

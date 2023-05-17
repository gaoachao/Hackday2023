import { useState } from 'react';
import "./index.scss";

import Home from "@pages/Home";
import TopBar from '@components/TopBar';

function App() {
  return (
    <div className='h-container'>
      <TopBar/>
      <Home/>
    </div>
  )
}

export default App

import { useState } from 'react';
import "./index.scss";

import TopBar from '@components/TopBar';
import Home from "@pages/Home";
import Introduction from "@pages/Introduction";
import Rules from '@pages/Rules';
import Awards from '@pages/Awards';

function App() {
  return (
    <div className='h-container'>
      <TopBar/>
      <Home/>
      <Introduction/>
      <Rules/>
      <Awards/>
    </div>
  )
}

export default App

import { useState } from 'react';
import "./index.scss";

import TopBar from '@components/TopBar';
import Home from "@pages/Home";

import Introduction from "@components/Introduction";
import Theme from "@components/Theme";
import Rule from '@components/Rule';
import Awards from "@components/Awards";
import Schedule from '@components/Schedule';
import FAQs from '@components/FAQs';
import Access from '@components/Access';

function App() {
  return (
    <div className='h-container'>
      <TopBar/>
      <Home/>

      <Introduction/>
      <Theme/>
      <Rule/>
      <Awards/>
      <Schedule/>
      <FAQs/>
      <Access/>

    </div>
  )
}

export default App

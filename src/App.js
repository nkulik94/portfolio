import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import UnderConstruction from './components/UnderConstruction';
import Header from './components/Header';
import Projects from './components/Projects';
import DetailedProject from './components/DetailedProject';

function App() {
  const [showHeader, setHeader] = useState(true)

  useEffect(() => {
    fetch('https://portfolio-backend-production-f7fa.up.railway.app/wakeup')
  }, [])

  const app = (
    <>
    {showHeader ?  <Header /> : null}
    <Switch>
      <Route exact path='/'>
        <div></div>
      </Route>
      <Route path='/projects/:id'>
        <DetailedProject setHeader={setHeader} />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
    </Switch>
    </>
  )
  return (
    <>
      <CssBaseline />
      {process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' ? app : <UnderConstruction />}
    </>
  );
}

export default App;

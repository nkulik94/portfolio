import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
//import UnderConstruction from './components/UnderConstruction';
import Header from './components/Header';
import Projects from './components/Projects';
import DetailedProject from './components/DetailedProject';
import Blog from './components/Blog';
import About from './components/About';

function App() {
  const [showHeader, setHeader] = useState(true)

  useEffect(() => {
    fetch('https://portfolio-backend-production-f7fa.up.railway.app/wakeup')
    const body = {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({project: 'test', alert: 'hi'})
    }
    fetch('https://alertme.up.railway.app/nkulik', body)
  }, [])

  const app = (
    <>
    {showHeader ?  <Header /> : null}
    <Switch>
      <Route exact path='/'>
        <About />
      </Route>
      <Route path='/projects/:id'>
        <DetailedProject setHeader={setHeader} />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/blog'>
        <Blog />
      </Route>
    </Switch>
    </>
  )
  return (
    <>
      <CssBaseline />
      {/* {process.env.NODE_ENV === 'production' ? <UnderConstruction /> : app} */}
      {app}
    </>
  );
}

export default App;

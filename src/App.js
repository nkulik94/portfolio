import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import UnderConstruction from './components/UnderConstruction';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {

  const app = (
    <>
    <Header />
    <Switch>
      <Route exact path='/'>
        <div></div>
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

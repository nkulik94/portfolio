import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import UnderConstruction from './components/UnderConstruction';
import Header from './components/Header';

function App() {

  const app = (
    <>
    <Switch>
      <Header />
      <Route exact path='/'>
        <div></div>
      </Route>
      <Route path='/test'>
        <h1>Test</h1>
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

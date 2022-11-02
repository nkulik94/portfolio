import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import UnderConstruction from './components/UnderConstruction';

function App() {

  const app = (
    <Switch>
      <Route exact path='/'>
        <UnderConstruction />
      </Route>
      <Route path='/test'>
        <h1>Test</h1>
      </Route>
    </Switch>
  )
  return (
    <>
      <CssBaseline />
      {app}
    </>
  );
}

export default App;

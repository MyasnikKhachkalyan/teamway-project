import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home.page';
import TestsPage from './Tests.page';
import ResultsPage from './Results.page';
import { ScoreProvider } from './score-utils';

const App: FC = () => {
  return (
    <ScoreProvider>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={TestsPage} path="/tests" />
        <Route component={ResultsPage} path="/results" />
      </Switch>
    </ScoreProvider>
  );
};

export default App;

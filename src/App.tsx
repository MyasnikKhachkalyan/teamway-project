import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home.page';
import TestsPage from './Tests.page';
import ResultsPage from './Results.page';
import { ScoreContext } from './score-utils';

const App = () => {
  const [score, updateScore] = useState(0);

  const handleQuestionAnswer = (updateBy: number) => {
    updateScore((score) => score + updateBy);
  };

  return (
    <ScoreContext.Provider value={[handleQuestionAnswer, score]}>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={TestsPage} path="/tests" />
        <Route component={ResultsPage} path="/results" />
      </Switch>
    </ScoreContext.Provider>
  );
};

export default App;

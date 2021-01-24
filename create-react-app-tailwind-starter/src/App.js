import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { QuizCreate, MainWrapper } from './components';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/quiz/create'>
          <QuizCreate />
        </Route>

        {/* <Route exact path='/'>
          <Dashboard />
        </Route> */}
        {/* <Route path="/quiz/:id">
          <QuizShow/>
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
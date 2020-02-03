import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/commons/Header';
import APage from './pages/APage';
import BPage from './pages/BPage';
import TopPage from './pages/TopPage';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/apage" component={APage} />
        <Route path="/bpage" component={BPage} />
        <Route path="/" component={TopPage} />
        <Route component={TopPage} />
      </Switch>
    </div>
  );
}

export default App;

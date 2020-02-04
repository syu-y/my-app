import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/commons/Header';
import APage from './pages/APage';
import BPage from './pages/BPage';
import TopPage from './pages/TopPage';
import LoginPage from './pages/LoginPage';

const MainWrapper = styled.main`
    height: 100%;
    text-align: center;
`;

const App = () => {
  return (
    <div className="App">
      <Header/>
      <MainWrapper>
        <Switch>
          <Route path="/apage" component={APage} />
          <Route path="/bpage" component={BPage} />
          <Route path="/top" component={TopPage} />
          <Route path="/" component={LoginPage} />
          <Route component={LoginPage} />
        </Switch>
      </MainWrapper>
    </div>
  );
}

export default App;

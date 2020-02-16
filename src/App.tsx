import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/commons/Header';
import BPage from './pages/BPage';
import TopPage from './pages/TopPage/container';
import BookmarkPage from './pages/BookmarkPage/container';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { customTheme } from './components/commons/customeTheme';

const MainWrapper = styled.main`
    height: 100%;
    text-align: center;
`;

const App = () => {
  return (
    <div className="App">

      <MuiThemeProvider theme={customTheme}>
        <Header/>
        <ToastContainer autoClose={2000} />
        <MainWrapper>
          <Switch>
            {/* <Route path="/bpage" component={BPage} /> */}
            <Route path="/bookmark" component={BookmarkPage} />
            <Route path="/" component={TopPage} />
          </Switch>
        </MainWrapper>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

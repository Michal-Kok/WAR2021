import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './assets/style/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/style/GlobalStyle';
import MainTemplate from './templates/MainTemplate';
import LandingPage from './pages/LandingPage';
import Places from './pages/Places';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/places">
              <Places />
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default App;

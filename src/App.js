import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes,useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import store from './store/store';

const App = () => {
  const content = useRoutes(routes);
  const navigate = useNavigate();
  React.useEffect(() => {
    const auth = localStorage.getItem('isAuth')
    if (!auth && auth == null) {
      navigate('/login')
    }
  }, [])
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {content}
        </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
};

export default App;

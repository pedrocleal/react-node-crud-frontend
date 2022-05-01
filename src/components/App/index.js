import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/globals';
import colorsTheme from '../../assets/styles/colors/default';

import { Container } from './styles';

import Header from '../Header';
import Routess from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={colorsTheme}>
        <GlobalStyles />

        <Container>
          <Header />
          <Routess />
        </Container>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

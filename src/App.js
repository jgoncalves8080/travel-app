import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header theme={theme} />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from 'styled-components';
import Card from './components/card';
import Header from './components/header';
import SalonSection from './components/SalonSection';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header theme={theme} />
      <SalonSection/>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from 'styled-components';
import Card from './components/card';
import Banner from './components/banner';
import Header from './components/header';
import SalonSection from './components/SalonSection';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Banner />
      <Card/>
    </ThemeProvider>
  );
}

export default App;

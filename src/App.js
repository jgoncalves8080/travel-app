import { ThemeProvider } from 'styled-components';
import Footer from './components/footer/index';
import Header from './components/header';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header theme={theme} />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from 'styled-components';
import {darkTheme, lightTheme} from "../themes/default";
import GlobalStyles from './globals';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
export default Theme;
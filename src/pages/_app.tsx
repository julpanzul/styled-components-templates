import { ThemeProvider } from "next-themes";
import Theme from "../styles/theme";
// import { ThemeProvider } from "../utils/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
    </>
  );
}
 
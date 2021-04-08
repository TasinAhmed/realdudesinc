import { Layout } from "@components/templates";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

// import '../styles/globals.css'
import { GlobalStyle } from "../styles/global/global.style";
import { ThemeProvider } from "styled-components";
import theme from "../styles/global/theme";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return <> 
      	<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>      
      	</ThemeProvider>
    </>
}

export default MyApp
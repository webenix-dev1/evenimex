import Head from "next/head"
import Script from "next/script"
import React from "react"
import '../styles/globals.css'
// import styledComponentDefaultTheme from "../styles/styletheme"
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
        <Script href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></Script>
        <Script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></Script>
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></Script>
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></Script>
        <Script>var Alert = ReactBootstrap.Alert;</Script>
       </Head>

    </>
  )
  

}



export default MyApp

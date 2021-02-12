import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import createTheme from '../styles/createTheme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

  /** Remove server side jss, so that MaterialUI can inject its own */
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My Page Title</title>
      </Head>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;

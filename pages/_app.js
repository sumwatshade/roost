import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../config/theme';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AnalyticsWrapper from '../components/AnalyticsWrapper';
/**
 * Adds theme via Material UI theme provider
 */
export default class RoostApp extends App {
  /**
   * Grab server-side styling
   */
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  /**
   * Render page
   * @return {JSX} a next page
   */
  render() {
    const {Component, pageProps} = this.props;
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <AnalyticsWrapper>
            <CssBaseline />
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </AnalyticsWrapper>
        </ThemeProvider>
        <style jsx global>{`
          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

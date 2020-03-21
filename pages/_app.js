import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../config/theme';
import Nav from '../components/Nav';

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
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Nav />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

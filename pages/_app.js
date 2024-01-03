import React from "react";
import App from "next/app";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../config/theme";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnalyticsWrapper from "../components/AnalyticsWrapper";
/**
 * Adds theme via Material UI theme provider
 */
export default class RoostApp extends App {
  /**
   * Grab server-side styling
   */
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  /**
   * Render page
   * @return {JSX} a next page
   */
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <AnalyticsWrapper>
            <CssBaseline />
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </AnalyticsWrapper>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

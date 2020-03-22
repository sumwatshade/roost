import React from 'react';
import {initGA, logPageView} from '../utils/analytics';

/**
 * Provides styling
 */
export default class AnalyticsWrapper extends React.Component {
  /**
   * component
   */
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  /**
   * return children
   * @return {JSX} props
   */
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

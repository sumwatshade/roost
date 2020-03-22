
import ReactGA from 'react-ga';

/**
 * initialize Analytics
 */
export const initGA = () => {
  ReactGA.initialize('UA-161523112-1');
};

/**
 *
 */
export const logPageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
};

/**
 * Logs normal window event
 *
 * @param {String} category the type of log
 * @param {String} action link
 */
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({category, action});
  }
};

/**
 * Logs Error
 *
 * @param {String} description details about the exception
 * @param {boolean} fatal if the page
 */
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({description, fatal});
  }
};

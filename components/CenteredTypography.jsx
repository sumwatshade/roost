import {Typography, withStyles} from '@material-ui/core';

const CenteredTypography = withStyles(({spacing}) => ({
  root: {
    textAlign: 'center',
  },
  h2: {
    marginTop: spacing(3),
  },
}))(Typography);

export default CenteredTypography;

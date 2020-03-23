import React from 'react';
import NextMuiLink from './NextMuiLink';
import {Typography, AppBar, Toolbar, makeStyles} from '@material-ui/core';

const routes = [{
  name: 'Home',
  path: '/',
}, {
  name: 'About',
  path: '/about',
}];

const useStyles = makeStyles(({spacing}) => ({
  link: {
    marginRight: spacing(2),
    color: 'white',
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' component='nav'>
      <Toolbar>
        {routes.map(({name, path}) => {
          return (<NextMuiLink key={name} href={path} color='secondary'>
            <Typography className={classes.link} variant="h6">
              {name}
            </Typography>
          </NextMuiLink>);
        })}
      </Toolbar>
      <style jsx>{`
        .navigation {
            display: flex;
            flex-direction: row;
            margin: 0 5%;
            width: 20%;
            height: 60px;
            align-items: center;
            justify-content: space-evenly


        }

        @media(max-width: 480px) {
          .navigation {
            width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </AppBar>
  );
};

export default Nav;

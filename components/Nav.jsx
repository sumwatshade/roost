import React from 'react';
import NextMuiLink from './NextMuiLink';
import {Typography, AppBar, Toolbar} from '@mui/material';
import {styled} from '@mui/material/styles';

const routes = [{
  name: 'Home',
  path: '/',
}, {
  name: 'About',
  path: '/about',
}];

const RouteTypography = styled(Typography)(({theme}) => ({
  marginLeft: theme.spacing(3),
  color: 'white',
}));

const Nav = () => {
  return (
    <AppBar position='static' component='nav'>
      <Toolbar>
        {routes.map(({name, path}) => {
          return (<NextMuiLink key={name} href={path} color='secondary'>
            <RouteTypography variant="h6">
              {name}
            </RouteTypography>
          </NextMuiLink>);
        })}
      </Toolbar>
      <style jsx>{`
        .navigation {
            display: flex;
            flex-direction: row;
            margin: 0 5%;
            width: 40%;
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

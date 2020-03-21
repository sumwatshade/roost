import React from 'react';
import NextMuiLink from './NextMuiLink';
import {Typography} from '@material-ui/core';

const routes = [{
  name: 'Home',
  path: '/',
}, {
  name: 'About',
  path: '/about',
}];

const Nav = () => {
  return (
    <nav className="navigation">
      {routes.map(({name, path}) => {
        return (<NextMuiLink key={name} href={path}>
          <Typography>{name}</Typography>
        </NextMuiLink>);
      })}
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
    </nav>
  );
};

export default Nav;

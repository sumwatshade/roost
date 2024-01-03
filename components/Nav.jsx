import React from "react";
import NextMuiLink from "./NextMuiLink";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
];

const RouteTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  color: "white",
}));

const Nav = () => {
  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        {routes.map(({ name, path }) => {
          return (
            <NextMuiLink key={name} href={path} color="secondary">
              <RouteTypography variant="h6">{name}</RouteTypography>
            </NextMuiLink>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

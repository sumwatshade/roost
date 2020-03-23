/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Maps from '../components/Maps';
import SearchableTable from '../components/SearchableTable';
import {Typography, Container, withStyles} from '@material-ui/core';

const CenteredTypography = withStyles({
  root: {
    textAlign: 'center',
  },
})(Typography);

const Home = () => (
  <div>
    <Head>
      <title>Home - Roost</title>
    </Head>

    <Container>
      <CenteredTypography variant="h2" color="primary">Welcome to Roost</CenteredTypography>
      <CenteredTypography variant="subtitle1" color="secondary">Support local San Diego business through COVID-19</CenteredTypography>
      <SearchableTable />
      <Maps />
    </Container>
  </div>
);

export default Home;

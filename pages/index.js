/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Maps from '../components/Maps';
import SearchableTable from '../components/SearchableTable';
import {Container, Box} from '@material-ui/core';
import CenteredTypography from '../components/CenteredTypography';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home - Roost</title>
      </Head>

      <Container>
        <CenteredTypography variant="h2" color="primary">Welcome to Roost</CenteredTypography>
        <CenteredTypography variant="subtitle1" color="secondary">Support local San Diego business through COVID-19</CenteredTypography>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent="space-evenly"
          alignItems="space-evenly">
          <SearchableTable />
          <Box mt={3}>
            <Maps />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;

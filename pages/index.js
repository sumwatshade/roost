/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Maps from '../components/Maps';
import SearchableTable from '../components/SearchableTable';
import {Typography} from '@material-ui/core';
const Home = () => (
  <div className="container">
    <Head>
      <title>Home - Roost</title>
    </Head>

    <main>
      <Typography variant="h2" color="primary">Welcome to Roost</Typography>
      <Typography variant="subtitle1" color="secondary">Support local San Diego business through COVID-19</Typography>
      <SearchableTable />
      <Maps />
    </main>
  </div>
);

export default Home;

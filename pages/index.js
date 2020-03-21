/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Maps from '../components/Maps';
import SearchableTable from '../components/SearchableTable';
import {Typography} from '@material-ui/core';

const Home = () => (
  <div className="container">
    <Head>
      <title>Roost</title>
    </Head>

    <main>
      <Typography variant="h2" color="primary">Welcome to Roost</Typography>
      <Typography variant="subtitle1" color="secondary">Support local San Diego business through COVID-19</Typography>
      <SearchableTable />
      <Maps />
    </main>

    <footer>
      Make sure to take care of yourself! Head&nbsp;
      <a
        href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/2019-ncov-factsheet.pdf"
        target="_blank"
        rel="noopener noreferrer">
          here
      </a>&nbsp;for details on COVID-19.
    </footer>

    <style jsx>{`


      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }
    `}</style>
  </div>
);

export default Home;

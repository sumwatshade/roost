import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import Head from 'next/head';


/**
 * @return {JSX} about page
 */
export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Roost</title>
      </Head>
      <main>
        <Typography variant="h2" color="primary">
            Why this site exists
        </Typography>

        <Paper style={{
          width: '90vw',
          padding: '20px',
          margin: '20px 0',
        }}>

          <Typography variant="h4" color="primary">Mission</Typography>
          <Typography variant="body1" color="secondary">
              The Coronavirus has crippled the economy in the United States
              within a matter of weeks. Small business (and the people they
              employ) have in particular suffered immediately. As a lovely
              and empathetic community, I am reaching out to my fellow
              San Diegans to help our neighbors in their time of need.
          </Typography>
          <Typography variant="h4" color="primary">
              What we can do</Typography>
          <Typography variant="h4" color="primary">
              COVID-19 Resources</Typography>
          <Typography variant="h4" color="primary">
              Keeping busy during social distancing</Typography>


          <Typography variant=""></Typography>

        </Paper>
      </main>
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
}

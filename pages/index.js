/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Maps from '../components/Maps';
import SearchableTable from '../components/SearchableTable';
import {Container, useTheme, Box, useMediaQuery} from '@material-ui/core';
import CenteredTypography from '../components/CenteredTypography';
import PlaceProvider, { PlaceContext } from '../providers/PlaceProvider';

const Home = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const context = React.useContext(PlaceContext);

  return (
    <PlaceProvider>
      <div>
        <Head>
          <title>Home - Roost</title>
        </Head>
        <Container>
          <CenteredTypography variant="h2" color="primary">Welcome to Roost</CenteredTypography>
          <CenteredTypography variant="subtitle1" color="secondary">Support local San Diego business through COVID-19</CenteredTypography>
          <Box
            display='flex'
            flexDirection={isLargeScreen ? 'row' : 'column'}
            justifyContent="space-evenly"
            alignItems="space-evenly">
            <SearchableTable />
            <Box mt={3} flexGrow={1} mx={isLargeScreen ? 3 : 0}>
              <Maps />
            </Box>
          </Box>
        </Container>
      </div>
    </PlaceProvider>
  );
};

export default Home;

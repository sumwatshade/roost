import React from 'react';
import {Paper, Typography, Container, Box} from '@material-ui/core';
import Head from 'next/head';
import CenteredTypography from '../components/CenteredTypography';

import WebsiteLink from '../components/WebsiteLink';

/**
 * @return {JSX} about page
 */
export default function About() {
  return (
    <div>
      <Head>
        <title>About - Roost</title>
      </Head>
      <Container>
        <CenteredTypography variant="h2" color="primary">
          Why this site exists
        </CenteredTypography>

        <Box component={Paper} p={3} mt={3}>

          <Typography variant="h4" color="primary">
            Mission Statement
          </Typography>

          <Box my={2}><Typography variant="body1" color="secondary">
            The Coronavirus has crippled the economy in the United States
            within a matter of weeks. Small businesses (and the people they
            employ) have in particular suffered immediately. As a lovely
            and empathetic community, I am reaching out to my fellow
            San Diegans to help our neighbors in their time of need.
          </Typography></Box>

          <Typography variant="h4" color="primary">
              What we can do</Typography>

          <Box my={2}><Typography component='div' color="secondary">
            <ul>
              <li>
                <strong>Support local businesses</strong>: Although many shops
                have closed down their in-person experiences, we still have
                the opportunity to donate or purchase from them! Look for your
                favorite local business website and see if you can purchase a
                gift card or a piece of merchandise! We will work towards
                generating a list of venmo, patreon, paypal, or other methods
                by which the community can donate.
              </li>
              <li>
                <strong>Social Distancing</strong>: One of the best things for
                these businesses will be to reopen! Let&apos;s do our best to
                follow guidelines of social distancing and self-care in order
                to slow down the spread of disease. The better we do as a
                nation to mitigate the disease, the sooner these local
                businesses can open their doors to the public.
              </li>
            </ul>
          </Typography></Box>

          <Typography variant="h4" color="primary">
              COVID-19 Resources</Typography>

          <Box my={2}><Typography component='div' color="secondary">
            <ul>
              <li><WebsiteLink
                label="CDC COVID-19 Fact Sheet"
                href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/2019-ncov-factsheet.pdf"/></li>
              <li><WebsiteLink
                label="COVID-19 Reddit Live Thread"
                href="https://www.reddit.com/live/14d816ty1ylvo/"/></li>
              <li><WebsiteLink
                label="WHO COVID-19 Preventative Measures"
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"/></li>
              <li>Did you test positive? Are you curious of what
                it&apos;s like? Here is a&nbsp;
              <WebsiteLink
                label="reddit community"
                color="primary"
                href="https://www.reddit.com/r/COVID19positive/"/>
                &nbsp;of people describing their experience and symptoms</li>
            </ul>
          </Typography></Box>

          <Typography variant="h4" color="primary">
              Keeping busy during social distancing</Typography>

          <Box my={2}><Typography component='div' color="secondary">
              Is cabin fever beginning to set in? Here are a few things to help
              keep the mind at ease!
            <ul>
              <li><WebsiteLink
                label="Free Audiobooks for ages 0-18"
                href="https://www.reddit.com/r/YouShouldKnow/comments/flk9lr/ysk_audible_has_made_hundreds_of_children_ages/" /></li>
              <li>Listen to music with your friends with&nbsp;
                <WebsiteLink
                  label="JQBX"
                  color="primary"
                  href="https://www.jqbx.fm/" />
                !</li>
              <li>Learn something new with&nbsp;
                <WebsiteLink
                  label="MIT Opencourseware"
                  color="primary"
                  href="https://ocw.mit.edu/index.htm" />.</li>
            </ul>
          </Typography></Box>

        </Box>
      </Container>
    </div>
  );
}

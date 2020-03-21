import React from 'react';
import {Paper, Typography, withStyles} from '@material-ui/core';
import Head from 'next/head';

import WebsiteLink from '../components/WebsiteLink';

const SpacedParagraph = withStyles({
  root: {
    margin: '20px 0',
  },
})(Typography);

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

          <Typography variant="h4" color="primary">
            Mission Statement
          </Typography>
          <SpacedParagraph variant="body1" color="secondary">
            The Coronavirus has crippled the economy in the United States
            within a matter of weeks. Small businesses (and the people they
            employ) have in particular suffered immediately. As a lovely
            and empathetic community, I am reaching out to my fellow
            San Diegans to help our neighbors in their time of need.
          </SpacedParagraph>

          <Typography variant="h4" color="primary">
              What we can do</Typography>

          <SpacedParagraph variant="body1" color="secondary">
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
          </SpacedParagraph>

          <Typography variant="h4" color="primary">
              COVID-19 Resources</Typography>
          <SpacedParagraph variant="body1" color="secondary">
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
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"/>
                &nbsp;of people describing their experience and symptoms</li>
            </ul>
          </SpacedParagraph>

          <Typography variant="h4" color="primary">
              Keeping busy during social distancing</Typography>
          <SpacedParagraph variant="body1" color="secondary">
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
          </SpacedParagraph>

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

      main p {
        margin: 20px 0;
      }

      .MuiTypography-body1 {
        margin: 20px 0;
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

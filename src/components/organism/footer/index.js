/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import { withNamespaces } from 'react-i18next';

import {
  Wrapper, NavItemTitle, NavItem, LogoText, Top, Bottom, SubscribeWrapper,
  Item, ExtraItem, FacebookIcon, SocialWrapper, TwitterIcon, InstagramIcon,
  LinkedinIcon, SubscribeTextInput, SubscribeButton, SubscribeButtonWrapper,
} from './styles';

const FooterCmp = ({ kind, t }) => (
  <Wrapper theme={{ kind }}>
    <Top>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2, 1 / 4, 1 / 6]} px={2}>
          <Item>
            <NavItemTitle>HOME</NavItemTitle>
            <ul>
              <li><NavItem to="/gospel">Gospel</NavItem></li>
              <li><NavItem to="/hip-hop">Hip-Pop</NavItem></li>
              <li><NavItem to="/rnb">RnB</NavItem></li>
              <li><NavItem to="/dj">DJ</NavItem></li>
            </ul>
          </Item>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4, 1 / 6]} px={2}>
          <Item>
            <NavItemTitle>TOP GENRE</NavItemTitle>
            <ul>
              <li><NavItem to="/gospel">Gospel</NavItem></li>
              <li><NavItem to="/hip-hop">Hip-Pop</NavItem></li>
              <li><NavItem to="/rnb">RnB</NavItem></li>
              <li><NavItem to="/dj">DJ</NavItem></li>
            </ul>
          </Item>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4, 1 / 6]} px={2}>
          <Item>
            <NavItemTitle>RESOURCES</NavItemTitle>
            <ul>
              <li><NavItem to="/">Home</NavItem></li>
              <li><NavItem to="/hip-hop">Events</NavItem></li>
              <li><NavItem to="/rnb">Apply as Talent/Book</NavItem></li>
            </ul>
          </Item>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4, 1 / 6]} px={2}>
          <Item>
            <NavItemTitle>ABOUT AVO</NavItemTitle>
            <ul>
              <li><NavItem to="/blogs">Blogs</NavItem></li>
              <li><NavItem to="/events">Events</NavItem></li>
              <li><NavItem to="/press">Press</NavItem></li>
              <li><NavItem to="/career">Career</NavItem></li>
              <li><NavItem to="/contact">Contact</NavItem></li>
              <li><NavItem to="/partners">Partners</NavItem></li>
            </ul>
          </Item>
        </Box>
        <Box width={[1, 1, 1, 2 / 6, 2 / 6]} px={2} style={{ alignItems: 'flex-end' }}>
          <Item>
            <h3>{t('common:footer.subscriptionTitle').toUpperCase()}</h3>
            <br />
            <SubscribeWrapper>
              <SubscribeTextInput placeholder="Email address" />
              <SubscribeButtonWrapper>
                <SubscribeButton>Sign up</SubscribeButton>
              </SubscribeButtonWrapper>
            </SubscribeWrapper>
            <ExtraItem style={{ marginTop: 5 }}>
              <p>
                {t('common.description')}
              </p>
            </ExtraItem>
            <ExtraItem style={{ fontWeight: 'bold' }}>
              <LogoText theme={{ kind }}>{t('common.appName')}</LogoText>
              <p>
                {t('common.description')}
              </p>
            </ExtraItem>
            <SocialWrapper>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedinIcon />
            </SocialWrapper>
          </Item>
        </Box>
      </Flex>
    </Top>
    <Bottom theme={{ kind }}>
      <p>
&copy;
        {` Copyright ${new Date().getFullYear()}. All rights reserved, Gueva`}
      </p>
      <Box width={[1, 1 / 2, 1 / 4, 1 / 6]} px={2}>
        <NavItem to="/blogs">Home</NavItem>
        <NavItem style={{ marginLeft: 5 }} to="/events">Apply</NavItem>
        <NavItem style={{ marginLeft: 5 }} to="/press">Login</NavItem>
        <NavItem style={{ marginLeft: 5 }} to="/career">Contact</NavItem>
      </Box>
    </Bottom>
  </Wrapper>
);

FooterCmp.propTypes = {
  kind: PropTypes.oneOf(['dark', 'light']),
};

FooterCmp.defaultProps = {
  kind: 'dark',
};

export const Footer = withNamespaces(['common', 'footer'])(FooterCmp);
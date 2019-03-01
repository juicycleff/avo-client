import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import {
  Wrapper, Right, NavItem, Left, LoginNavItem, Extra, LogoText,
} from './styles';
import { SearchBar } from '../../molecules/search-bar';

export const HeaderCmp = ({ kind }) => (
  <Wrapper theme={{ kind }}>
    <Left>
      <LogoText theme={{ kind }}>AVO</LogoText>
      <SearchBar kind={kind} />
    </Left>

    <Right>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/events">Events</NavItem>
      <NavItem to="/apply">Apply as Talent/Book</NavItem>
    </Right>
    <Extra>
      <LoginNavItem to="/login">Login</LoginNavItem>
      <LoginNavItem to="/booked">Booked</LoginNavItem>
    </Extra>
  </Wrapper>
);

HeaderCmp.propTypes = {
  kind: PropTypes.oneOf(['dark', 'light']),
};

HeaderCmp.defaultProps = {
  kind: 'dark',
};

export const Header = withNamespaces(['common', 'footer'])(HeaderCmp);
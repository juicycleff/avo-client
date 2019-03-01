import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { FacebookSquare } from 'styled-icons/fa-brands/FacebookSquare';
import { TwitterSquare } from 'styled-icons/fa-brands/TwitterSquare';
import { Instagram } from 'styled-icons/icomoon/Instagram';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';

import { media } from 'helpers/sizes';
import { colors } from '../../../theme/colors';

export const Wrapper = styled.footer`
  display: flex;
  min-height: 150px;
  flex-direction: column;

  ${switchProp('theme.kind', {
    light: css`
        background-color: #f0f0f0;
        p, span, h1, h2, h3, h4, h5, h6, a {
          color: #666;
        }
    `,
    dark: css`
      background-color: #212121;
      p, h1, h2, h3, h4, h5, h6, span, a {
        color: rgba(255,255,255,0.8);
      }
    `,
  })}
`;

export const NavItemTitle = styled.span`
  padding: 3px;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-decoration: none;
  letter-spacing: 0.5;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NavItem = styled(NavLink)`
  padding: 3px;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  text-decoration: none;
  letter-spacing: 0.5;
  font-weight: 300;

  font-family: "BentonSans", "Helvetica Neue", sans-serif;

  line-height: 1.8em;
  -webkit-font-smoothing: antialiased;
`;

export const LoginNavItem = styled(NavLink)`
  padding: 5px;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-decoration: none;
  letter-spacing: 0.5;
  color: #212121;
  text-transform: uppercase;
  font-weight: 800;
  margin-left: 5px;
  border: 2px solid rgba(0,0,0,0.8);
  border-radius: 30px;
`;

export const LogoText = styled.div`
  padding: 10px;
  align-items: center;
  justify-content: center;
  font-size: 4.4rem;
  text-decoration: none;
  letter-spacing: 0.5;
  font-family: Pasejro;
  text-transform: uppercase;
  font-weight: 800;

  ${switchProp('theme.kind', {
    light: css`
      color: rgba(0,0,0,0.7);
      text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    `,
    dark: css`
      color: rgba(255,255,255,0.8);
    `,
  })}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  flex: 2;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  justify-content: flex-end;
`;

export const Extra = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  flex: 1;
  justify-content: flex-end;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;
  min-height: 300px;
  padding-top: 50px;
  padding-bottom: 50px;

  ${media.down('lg')`
    padding-left: 80px;
    padding-right: 80px;
  `}

  ${media.down('md')`
    padding-left: 60px;
    padding-right: 60px;
  `}

  ${media.down('sm')`
    padding-left: 0;
    padding-right: 0;
  `}
`;


export const Bottom = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;

  ${media.down('lg')`
    padding-left: 80px;
    padding-right: 80px;
  `}

  ${media.down('md')`
    padding-left: 60px;
    padding-right: 60px;
  `}

  ${media.down('sm')`
    padding-left: 0;
    padding-right: 0;
  `}

  ${switchProp('theme.kind', {
    light: css`
        background-color: #f6f6f6;
        p, span, h1, h2, h3, h4, h5, h6, a {
          color: #212121;
        }
    `,
    dark: css`
      background-color: #000000;
      p, h1, h2, h3, h4, h5, h6, span, a {
        color: rgba(255,255,255,0.8);
      }
    `,
  })}

  height: 80px;
`;

export const SectionRow = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
`;

export const Item = styled.section`
  display: flex;
  flex-direction: column;

  ul, li { 
    list-style: none;
    padding-left: 0;
    flex-grow: 1;
  }

  li {
    display: list-item;
  }
`;

export const ExtraItem = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  margin-top: 50px;
`;

export const FacebookIcon = styled(FacebookSquare)`
  color: ${colors.darkText};
  height: 40px;
  width: 40px;
  :hover {
    color: #3b5998;
  }
`;

export const TwitterIcon = styled(TwitterSquare)`
  color: ${colors.darkText};
  height: 40px;
  width: 40px;

  :hover {
    color: #1DA1F2;
  }
`;

export const InstagramIcon = styled(Instagram)`
  height: 35px;
  width: 35px;
  color: ${colors.darkText};

  :hover {
    color: #C13584;
  }
`;

export const LinkedinIcon = styled(Linkedin)`
color: ${colors.darkText};
  height: 40px;
  width: 40px;

  :hover {
    color: #0077B5;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;

export const SubscribeWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #ffffff;
  flex-wrap: nowrap;
  max-height: 38px;
  align-items: center;
`;

export const SubscribeTextInput = styled.input`
  background-color: #ffffff;
  width: 100%;
  height: 32px;
  font-size: 1.0rem;
  border: 0 none rgba(0,0,0,0.3);
  padding: 5px 10px;
`;

export const SubscribeButtonWrapper = styled.div`
  background-color: #ffffff;
  padding: 6.2px;
  width: 30%;
`;

export const SubscribeButton = styled.button`
  padding: 5px;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-decoration: none;
  letter-spacing: 0.5;
  color: #212121;
  text-transform: uppercase;
  font-weight: 800;
  border: 2px solid rgba(0,0,0,0.8);
  border-radius: 30px;
`;
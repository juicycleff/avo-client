import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { colors } from '../../../theme/colors';
import { media } from 'helpers/sizes';

export const Wrapper = styled.header`
  display: flex;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
  align-items: center;
  height: 69px;

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
        background-color: ${colors.white};
        p, span, h1, h2, h3, h4, h5, h6, a {
          /* color: #212121; */
        }
    `,
    dark: css`
      background-color: ${colors.darkText};
      p, h1, h2, h3, h4, h5, h6, span, a {
        color: rgba(255,255,255,0.8);
      }
    `,
  })}
`;

export const NavItem = styled(NavLink)`
  padding: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 0.5;
  color: #212121;
  text-transform: uppercase;
  font-weight: bolder;
`;

export const LoginNavItem = styled(NavLink)`
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
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
  font-size: 32px;
  text-decoration: none;
  letter-spacing: 0.5;
  font-family: Pasejro;
  color: #212121;
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 800;
  text-shadow: 5px 5px 10px rgba(0,0,0,0.1);

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
  flex: 5;
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
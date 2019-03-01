import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { SearchAlt } from 'styled-icons/boxicons-regular/SearchAlt';

export const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  font-size: 1.0rem;
  padding: 5px 15px;
  border: 0px solid rgba(255,255,266,0.9);
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;

  ${switchProp('theme.kind', {
    light: css`
        background-color: #d3d3d3;
        p, span, h1, h2, h3, h4, h5, h6, a {
          color: #212121;
        }
    `,
    dark: css`
      background-color: rgba(255,255,255,0.9);
      p, h1, h2, h3, h4, h5, h6, span, a {
        /*color: rgba(255,255,255,0.8);*/
      }
    `,
  })}
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: transparent;
  flex-wrap: nowrap;
  max-height: 38px;
  align-items: center;
`;

export const SearchButtonWrapper = styled.div`
  height: 32px;
  padding: 5px 10px;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  ${switchProp('theme.kind', {
    light: css`
        background-color: #d3d3d3;
        p, span, h1, h2, h3, h4, h5, h6, a {
          color: #212121;
        }
    `,
    dark: css`
      background-color: rgba(255,255,255,0.9);
      p, h1, h2, h3, h4, h5, h6, span, a {
        /*color: rgba(255,255,255,0.8);*/
      }
    `,
  })}
`;

export const SearchButton = styled.button`
  padding: 2px;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-decoration: none;
  letter-spacing: 0.5;
  color: #212121;
  text-transform: uppercase;
  font-weight: 800;
  background-color: transparent;
  border-radius: 90px;
  border: 0px solid rgba(0,0,0,0.8);
`;

export const SearchBar = ({ kind }) => {

  return (
    <SearchWrapper>
      <SearchInput theme={{ kind }} placeholder="Find artist and stars" />
      <SearchButtonWrapper theme={{ kind }}>
        <SearchButton>
          <SearchAlt
            style={{
              color: '#212121',
              height: 32,
              backgroundColor: 'transparent',
            }}
          />
        </SearchButton>
      </SearchButtonWrapper>
    </SearchWrapper>
  );
}

SearchBar.propTypes = {
  kind: PropTypes.oneOf(['dark', 'light']),
};

SearchBar.defaultProps = {
  kind: 'light',
};
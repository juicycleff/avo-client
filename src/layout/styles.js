import styled from 'styled-components';

import { media } from 'helpers/sizes';


export const Content = styled.footer`
  min-height: 439px;

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
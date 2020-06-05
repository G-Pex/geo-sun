/**
 *
 * @summary A simple header component
 * @description A simple header component with an h1 title
 * @author Gareth Perry <garethnperry@gmail.com>
 *
 * @version 1.0.0 (June 2020)
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tryTheme } from '../../utils/index';

const HeaderContainer = styled.div`
  position: relative;
  height: 90px;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  font-family: ${props => tryTheme(props, 'font_family')};
  color: black;
  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

  @media (min-width: 1281px) {
    font-size: 30px;
  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 24px;
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 22px;
  }

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 26px;
  }

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 24px;
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 24px;
  }
`;

export function Header(props) {
  const { title } = props;
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}
Header.propTypes = ({ string } = PropTypes) => {
  return {
    /* The title text */
    title: string,
  };
};

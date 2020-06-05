import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tryTheme } from '../../utils/index';

const HeaderContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  font-family: ${props => tryTheme(props, 'font_family')};
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

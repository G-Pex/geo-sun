/**
 *
 * @summary An error message overlay
 * @description An error message overlay which acts as an overlay to the parent component
 * @author Gareth Perry <garethnperry@gmail.com>
 *
 * @version 1.0.0 (June 2020)
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorContainer = styled.div`
  z-index: 2;
  position: absolute;
  background-color: white;
  opacity: 0.8;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ErrorMessage = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;

export default function Error(props) {
  const { error, closeFunc } = props;
  console.log('error', error);
  return (
    <ErrorContainer onClick={() => closeFunc()}>
      <ErrorMessage>{`${error}`}</ErrorMessage>
    </ErrorContainer>
  );
}
Error.propTypes = ({ string, func } = PropTypes) => {
  return {
    /* The error message */
    error: string,
    /* The close function*/
    closeFunc: func,
  };
};

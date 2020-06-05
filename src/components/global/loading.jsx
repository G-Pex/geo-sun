/**
 *
 * @summary A loading spinner
 * @description A loading spinner which acts as an overlay to the parent component
 * @author Gareth Perry <garethnperry@gmail.com>
 *
 * @version 1.0.0 (June 2020)
 */

import React from 'react';
import styled from 'styled-components';

const LoadingBackground = styled.div`
  z-index: 2;
  position: absolute;
  background-color: white;
  opacity: 0.7;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LoadingAnimation = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid black;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  margin-left: auto;
  margin-right: auto;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
export default function Loading() {
  return (
    <LoadingBackground>
      <LoadingAnimation />
    </LoadingBackground>
  );
}

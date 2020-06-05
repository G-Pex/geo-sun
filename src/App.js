/**
 *
 * @summary Sunrise and Sunset Times App
 * @description  The root of the Application
 * @author Gareth Perry <garethnperry@gmail.com>
 *
 * @version 1.0.0 (June 2020)
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import styled from 'styled-components';
import SunTimes from 'components/sunTimes/sunTimes';
import { Header } from 'components/header/header';
import { defaultTheme } from './utils/index';

const AppContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  border-left: yellow;
  border-right: yellow;
  background-color: #ffaa00;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Header title={'Local Sunrise and Sunset Times'}></Header>
        <SunTimes />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

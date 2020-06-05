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

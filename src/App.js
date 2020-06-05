import React from 'react';
import './App.css';
import styled from 'styled-components';
import SunTimes from 'components/sunTimes/sunTimes';

const AppContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Header = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid black;
`;

function App() {
  return (
    <AppContainer>
      <Header></Header>
      <SunTimes />
    </AppContainer>
  );
}

export default App;

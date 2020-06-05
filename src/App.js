import React from 'react';
import './App.css';
import InputWithIcon from 'components/global/inputWithIcon';
import styled from 'styled-components';

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

const InputBoxes = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100% - 100px);
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

function App() {
  return (
    <AppContainer>
      <Header></Header>
      <InputBoxes>
        <InputWithIcon
          {...{
            height: 60,
            width: 400,
            placeholderText: 'Please enter your location',
          }}
        />
        <InputWithIcon
          {...{
            height: 60,
            width: 400,
            placeholderText: 'Sunrise',
          }}
        />
        <InputWithIcon
          {...{
            height: 60,
            width: 400,
            placeholderText: 'Sunset',
          }}
        />
      </InputBoxes>
    </AppContainer>
  );
}

export default App;

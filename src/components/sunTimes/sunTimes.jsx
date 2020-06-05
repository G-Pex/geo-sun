import React, { useState } from 'react';
import styled from 'styled-components';
import InputWithIcon from 'components/global/inputWithIcon';
import { tryTheme } from '../../utils/index';
import locate from '../../assets/icons/locate.svg';
import sunrise from '../../assets/icons/sunrise.svg';
import sunset from '../../assets/icons/sunset.svg';
import { callMapBoxApi, getSunTimes } from './api';

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

const Button = styled.button`
  max-width: 300px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export default function SunTimes() {
  const [location, setLocation] = useState('');
  const [sunriseTime, setSunriseTime] = useState(null);
  const [sunsetTime, setSunsetTime] = useState(null);

  const defaultIconProps = {
    height: 30,
    width: 30,
    fillColour: tryTheme('red'),
    lineColour: tryTheme('red'),
    paddings: { top: 20 },
  };

  async function fetchTimes() {}
  function getLocationInput() {
    return {
      height: 60,
      width: 400,
      placeholderText: location || 'Please enter your location',
      updateFunc: value => setLocation(value),
      iconProps: {
        ...defaultIconProps,
        svg: locate,
        svgClass: '#locate',
        onClickFunc: () => console.log('click!'),
      },
    };
  }
  function getSunriseInput() {
    return {
      height: 60,
      width: 400,
      placeholderText: sunriseTime || 'Sunrise time will appear here',
      iconProps: {
        ...defaultIconProps,
        svg: sunrise,
        svgClass: '#sunrise',
      },
    };
  }
  function getSunsetInput() {
    return {
      height: 60,
      width: 400,
      placeholderText: sunsetTime || 'Sunset time will appear here',
      iconProps: {
        ...defaultIconProps,
        svg: sunset,
        svgClass: '#sunset',
      },
    };
  }
  return (
    <InputBoxes>
      <InputWithIcon {...getLocationInput()} />
      <Button onClick={() => fetchTimes()}>Get Sunrise and Sunset Times</Button>
      <InputWithIcon {...getSunriseInput()} />
      <InputWithIcon {...getSunsetInput()} />
    </InputBoxes>
  );
}

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
  max-height: 400px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  max-width: 300px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export default function SunTimes() {
  const [location, setLocation] = useState('');
  const [sunriseTime, setSunriseTime] = useState(null);
  const [sunsetTime, setSunsetTime] = useState(null);

  const defaultInputProps = { height: 60, width: 400 };
  const defaultIconProps = {
    height: 30,
    width: 30,
    fillColour: tryTheme('red'),
    lineColour: tryTheme('red'),
    paddings: { top: 20 },
  };

  async function fetchTimes() {
    const results = await callMapBoxApi(location);
    console.log('results', results.address);
    const sunRiseSetTimes = await getSunTimes(
      results.address[0].center[1],
      results.address[0].center[0]
    );
    setSunriseTime(sunRiseSetTimes.results.sunrise);
    setSunsetTime(sunRiseSetTimes.results.sunset);
  }

  async function requestUserLocation() {
    navigator.geolocation.getCurrentPosition(async function(position) {
      const response = await callMapBoxApi(
        `${position.coords.longitude},${position.coords.latitude}`
      );
      return setLocation(response.address[0].place_name);
    });
  }
  function getLocationInput() {
    return {
      ...defaultInputProps,
      placeholderText: location || 'Please enter your location',
      updateFunc: value => setLocation(value),
      iconProps: {
        ...defaultIconProps,
        svg: locate,
        svgClass: '#locate',
        onClickFunc: () => requestUserLocation(),
      },
    };
  }
  function getSunriseInput() {
    return {
      ...defaultInputProps,
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
      ...defaultInputProps,
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
      <Button onClick={() => fetchTimes()} disabled={location.length < 3}>
        Get Sunrise and Sunset Times
      </Button>
      <InputWithIcon {...getSunriseInput()} />
      <InputWithIcon {...getSunsetInput()} />
    </InputBoxes>
  );
}

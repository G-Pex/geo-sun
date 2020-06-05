/**
 *
 * @summary The Sunrise/Sunset times component
 * @description Using the user geolocation or user provided location, displays the sunrise and sunset times
 * @author Gareth Perry <garethnperry@gmail.com>
 *
 * @version 1.0.0 (June 2020)
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import InputWithIcon from 'components/global/inputWithIcon';
import locate from '../../assets/icons/locate.svg';
import sunrise from '../../assets/icons/sunrise.svg';
import sunset from '../../assets/icons/sunset.svg';
import { callMapBoxApi, getSunTimes } from './api';
import sunriseImg from '../../assets/sunrise.jpg';
import Loading from 'components/global/loading';
import Error from 'components/global/error';

const SunTimesContainer = styled.div`
  height: calc(100% - 100px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const InputBoxes = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 450px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  box-sizing: border-box;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  border: 1px solid yellow;
`;

const Button = styled.button`
  width: 320px;
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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * Gets the sunrise/sunset times
   */
  async function fetchTimes() {
    setIsLoading(true);
    // Get the geolocation data from mapbox api
    const response = await callMapBoxApi(location);
    if (response.error) {
      setIsLoading(false);
      return setErrorMessage(response.error);
    }

    try {
      // Get the sun rise/set times from api
      const sunRiseSetTimes = await getSunTimes(
        response.address[0].center[1],
        response.address[0].center[0]
      );
      // Set state with returned values
      setSunriseTime(sunRiseSetTimes.results.sunrise + ' GMT');
      setSunsetTime(sunRiseSetTimes.results.sunset + ' GMT');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return setErrorMessage('No addresses returned');
    }
  }

  /**
   * Requests to use the users location, calls mapbox api to get address for input value
   */
  async function requestUserLocation() {
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(async function(position) {
      // Get address data using user geolocation
      const response = await callMapBoxApi(
        `${position.coords.longitude},${position.coords.latitude}`
      );
      if (response.error) {
        setIsLoading(false);
        return setErrorMessage(response.error);
      }
      try {
        const address = response.address[0].place_name.split(',');
        // Set value of location input to returned address
        return setLocation(`${address[0]}, ${address[1]}, ${address[2]}`);
      } catch (error) {
        setIsLoading(false);
        return setErrorMessage('No addresses returned');
      }
    });
    setIsLoading(false);
  }

  // The default props for all inputs
  const defaultInputProps = { height: 60, width: 350 };

  // The default props for all input icons
  const defaultIconProps = {
    height: 30,
    width: 30,
    paddings: { top: 20, right: 10 },
  };

  /**
   * Returns the props of the Location Input Box
   */
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

  /**
   * Returns the props of the Sunrise Input Box
   */
  function getSunriseInput() {
    return {
      ...defaultInputProps,
      placeholderText: sunriseTime || 'Sunrise time will appear here',
      isDisabled: true,
      iconProps: {
        ...defaultIconProps,
        svg: sunrise,
        svgClass: '#sunrise',
      },
    };
  }

  /**
   * Returns the props of the Sunset Input Box
   */
  function getSunsetInput() {
    return {
      ...defaultInputProps,
      placeholderText: sunsetTime || 'Sunset time will appear here',
      isDisabled: true,
      iconProps: {
        ...defaultIconProps,
        svg: sunset,
        svgClass: '#sunset',
      },
    };
  }
  return (
    <SunTimesContainer>
      <InputBoxes bgImg={sunriseImg}>
        {isLoading && <Loading />}
        {errorMessage && (
          <Error error={errorMessage} closeFunc={() => setErrorMessage(null)} />
        )}
        <InputWithIcon {...getLocationInput()} />
        <Button onClick={() => fetchTimes()} disabled={location.length < 3}>
          Get Sunrise and Sunset Times
        </Button>
        <InputWithIcon {...getSunriseInput()} />
        <InputWithIcon {...getSunsetInput()} />
      </InputBoxes>
    </SunTimesContainer>
  );
}

const mapBoxAccessToken =
  'pk.eyJ1IjoiZ3BoZXgiLCJhIjoiY2sxOTN5b3Y5MHlyazNsbXJiNXlqaWxpciJ9.maDa-fTI1_chmXtcMZh3lw';

/**
 * Calls the mapbox places api with the provided searchString
 * @param {*} searchString : The search string to be queried
 * @returns The mapbox API response object or error
 */
async function callMapBoxApi(searchString) {
  try {
    return await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchString}.json?access_token=${mapBoxAccessToken}`
    )
      .then(res => res.json())
      .then(res => res.features)
      .then(address => {
        if (address)
          return {
            address,
          };
        else return { error: 'No Address Found' };
      });
  } catch (error) {
    return { error };
  }
}

/**
 * Calls the sunrise-sunset api with the provided latitude and longitude
 * @param {*} lat : The latitude to be queried
 * @param {*} lng : The longitude to be queried
 * @returns The  response object or error
 */
async function getSunTimes(lat, lng) {
  try {
    let url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;
    return await fetch(url).then(res => res.json());
  } catch (error) {
    return { error };
  }
}

export { callMapBoxApi, getSunTimes };

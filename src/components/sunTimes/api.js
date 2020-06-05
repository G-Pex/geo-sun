const mapBoxAccessToken =
  'pk.eyJ1IjoiZ3BoZXgiLCJhIjoiY2sxOTN5b3Y5MHlyazNsbXJiNXlqaWxpciJ9.maDa-fTI1_chmXtcMZh3lw';

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

async function getSunTimes(lat, lng) {
  let url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;
  const response = await fetch(url).then(res => res.json());
  return response;
}

export { callMapBoxApi, getSunTimes };

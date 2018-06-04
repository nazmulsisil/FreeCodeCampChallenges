import { r } from '../../globalHelperFunctions';

const promise = () => {
  // function trySomething() {
  //   // manually done 50-50 success failure
  //   const hasData = [true, false][r(1)];

  //   return new Promise((sFn, fFn) => {
  //     if (hasData) sFn('Paisi');
  //     if (!hasData) fFn('Pelam Na');
  //   });
  // }

  // // const returnedFromPromise = trySomething();
  // // console.log(returnedFromPromise);

  // // const gottenFromThenCall = returnedFromPromise.then(spitOut, spitOut);
  // // console.log(gottenFromThenCall);

  // async function myAsync() {
  //   const returnedFromPromise = await trySomething();
  //   return returnedFromPromise;
  // }

  const myAsync = async () => {
    const fetchedVal = await fetch(
      'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/'
    );

    return fetchedVal;
  };

  const resolveEverything = async () => {
    const weatherData = await myAsync();
    return await weatherData.json();
  };

  resolveEverything().then(spitOut);
  // ======== ENDING SCRIPT =========
  console.log('...end Script');
};

function spitOut(spit) {
  console.log(spit.consolidated_weather[0].weather_state_name);
}

export default promise;

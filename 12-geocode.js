const API_code = '108928814141593330915x51535'; 

function cityInformation() {
  const cities = ['Minsk', 'Madrid', 'Rome'];
  for(city of cities) {
    fetch(`https://geocode.xyz/${city}?json=1&auth=${API_code}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const {city, countryname} = data.standard;
      console.log(`${city} - ${countryname}`);
    })
    .catch(error => console.log(error));
  }
}

function getCountryRace() {
  const cities = ['Paris', 'Nice'];
  const fetches = cities.map(city => {
    return fetch(`https://geocode.xyz/${city}?json=1&auth=${API_code}`);
  });
  Promise.race(fetches).then((response) => {
    return response.json();
  }).then((data) => {
    const { countryname } = data.standard;
    console.log(`${countryname}`);
  }).catch(error => console.log(error));
}

function getCountry() {
  const cities = ['Moscow', 'Berlin', 'Amsterdam', 'Milan', 'London'];
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cities);
    }, 3000);
  });
  promise.then(cities => {
    for(city of cities) {
      fetch(`https://geocode.xyz/${city}?json=1&auth=${API_code}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const {countryname} = data.standard;
        console.log(`${countryname}`);
      })
      .catch(error => console.log(error));
    }
  });
}

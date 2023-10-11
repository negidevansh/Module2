function whereAmI(lat, lng) {
  const apiUrl = `https://geocode.xyz/${lat},${lng}?geoit=json`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok`);
      }
      return response.json();
    })
    .then((data) => {
      // Process the geocoding data
      const city = data.city;
      const country = data.country;

      // Check if the data contains city and country information
      if (city && country) {
        console.log(`You are in ${city}, ${country}`);
      } else {
        console.log(`Location data not found for ${lat},${lng}`);
      }
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
}

// Example usage:
whereAmI(56.508, 13.381); // Replace with your desired latitude and longitude

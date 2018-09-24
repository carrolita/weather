
const API_KEY = '78f38b1ea5b9932c4ec4a10abd362d8b';
const ENDPOINT_URL = `http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`;

function getData() {
  console.log('Getting Data')
  fetch(ENDPOINT_URL)
  .catch(displayError)
  .then(data => data.json())
  .then(presentData);
}

function presentData(data) {
  console.log('Displaying Data');
  console.log(data);
  const containerElement = document.getElementById('weather-container');
  containerElement.innerHTML += `
    <div class="centered">
      <span class="text">Today it's ${data.weather[0].description} in ${data.name}.
      The temperature is ${data.main.temp.toFixed(1)} C</span>
    </div>
  `;
}

function displayError(error) {
  console.log(error);
  const containerElement = document.getElementById('weather-container');
  containerElement.innerHTML += `
    ${error}
  `;
}



getData();

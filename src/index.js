function searchCity(event) {
  event.preventDefault();
  let cityNameInput = document.querySelector(".search-city");
  let apiKey = "c65900082459ba48632547338ca799b1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput.value}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function showTemperature(response) {
  console.log(response);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temperatureElement = document.querySelector(".temperature");
  let weatherDescription = document.querySelector(".weather-description");
  let description = response.data.weather[0].description;
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  weatherDescription.innerHTML = description;
}

function describeCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKeyCurrentLocation = "c65900082459ba48632547338ca799b1";
  let apiUrlCurrentLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKeyCurrentLocation}`;
  axios.get(`${apiUrlCurrentLocation}`).then(showTemperature);
}

let city = "brisbane";
let apiKey = "c65900082459ba48632547338ca799b1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
axios.get(`${apiUrl}`).then(showTemperature);

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
let currentLocationEvent = document.querySelector(".current-location-button");
currentLocationEvent.addEventListener("click", describeCurrentPosition);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let newDay = days[now.getDay()];
let day = document.querySelector(".day");
day.innerHTML = `${newDay}`;

let hours = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
];
let newHour = hours[now.getHours()];
let hour = document.querySelector(".hour");
hour.innerHTML = `${newHour}:`;

let newMinute = now.getMinutes();
let minute = document.querySelector(".minutes");
minute.innerHTML = `0${newMinute}`.slice(-2);

let am = document.querySelector(".am");
if (now.getHours() > 11) {
  am.innerHTML = `pm`;
} else {
  am.innerHTML = `am`;
}

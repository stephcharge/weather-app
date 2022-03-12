function searchCity(event) {
  event.preventDefault();
  let cityNameInput = document.querySelector(".search-city");
  let apiKey = "c65900082459ba48632547338ca799b1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput.value}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
  document.querySelector(".weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector(".temp-min").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector(".temp-max").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector(".wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
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

function displayForecast() {
  let forecastElement = document.querySelector(".forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="col-md-12 col-lg">
    <button class="forecast-body">
      <div class="forecast-day">${day}</div>
      <div class="weather-icon">☀️</div>
      <div class="forecast-temp">
        <span class="forecast-temp-min">22° | </span>
        <span class="forecast-temp-max">25°</span>
      </div>
    </button>
  </div>`;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

displayForecast();
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

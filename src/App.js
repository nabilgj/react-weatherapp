// weather api

import api from "./apikeys.config.json";
import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState([]);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((data) => {
          setQuery("");
          setWeather(data);
          console.log(data);
        });
    }
  };

  return (
    <div className="app">
      <main>
        <div className="search">
          <input
            type="text"
            placeholder="your city"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)} degrees
              </div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        ) : undefined}
      </main>
    </div>
  );
};

export default App;

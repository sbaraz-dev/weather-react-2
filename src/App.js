import React, { useState } from 'react';
import { FcAcceptDatabase } from 'react-icons/fc';

const api = {
  key: 'ba97997bcf3c85fc91414f251a3265f9',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const favList = []

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const searchByFavorite = evt => {
    // setQuery(evt.target.value);
    const favInfo = favList.find(x => x.stadt === evt.target.value).info 
    setWeather(favInfo)     
  }

  const dateBuilder = (d) => {
    let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    let days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  function addFavorite(item) {
    var select = document.getElementById('fav-box-id'); 
    var elementEnhalten = false;

    Array.from(select).forEach(function(option_element) {
      if (option_element.value == item) {
        window.alert(`${item} ist bereits in den Favoriten enthalten!`);
        elementEnhalten = true;
        return;
      } 
    });
    if (elementEnhalten) {
      return
    }

    var el = document.createElement('option');
    el.value = item;
    el.textContent = item;
    select.appendChild(el);
    // window.alert(`Sie haben ${item} zu den Favoriten hinzugefügt.`)

    favList.push({
      stadt: `${weather.name}, ${weather.sys.country}`,
      info: {
        name: weather.name, 
        sys: {country: weather.sys.country}, 
        main: {temp: weather.main.temp}, 
        weather: [{main: weather.weather[0].main}] 
      }
    });
    console.log(favList[0])


  }


  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? ('app warm') : ('app')) : ('app')}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Ort suchen ..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            ></input>
        </div>

        <div className="favoriten-box">
          <div className="kopf">
            Favoriten
          </div>
          <div className="körper">
            <select 
              className="auswahlbox" 
              size="1" id='fav-box-id' 
              onChange={searchByFavorite}>
              value={query}
              //hier sit die Liste der Favoriten
            </select>
          </div>
        </div>

        {(typeof weather.main != 'undefined') ? (
        <div className="info-box">
          <div className="location-box">
            <div className="location" id="location-id">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp" id="temp-id">
                {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">
              {weather.weather[0].main}
            </div>
          </div>
        
          <div className="add-favorite-box">
            <button 
              className="add-favorite-button"
              onClick={() => addFavorite(`${weather.name}, ${weather.sys.country}`)}
              >
                 <FcAcceptDatabase size="15px"  /> Zu Favoriten hinzufügen
            </button>
          </div>
          
        </div> 
        ) : ('')}


      </main>
    </div>
  );
}

export default App;

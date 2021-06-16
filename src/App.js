import React, { useEffect, useState } from 'react';
import { VscDiffAdded } from 'react-icons/vsc';
import { ImUpload2 } from 'react-icons/im';

const api = {
  key: 'ba97997bcf3c85fc91414f251a3265f9',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const sqlApi = {
  base: 'http://localhost:9191/',
  getData: 'products',
  pushData: 'addproducts'
}

// hier habe ich eine Liste der abgespeicherten Favoriten. Sie enthält aktuell nur begrenzte Infos aus der Request json.
// const favList = []

function App() {
  
  // KONSTANTEN hier definiert
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const [favList, setFavList] = useState([]);


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json()) 
      .then(result => {
        let fetchResult = {
          name: result.name,
          country: result.sys.country,
          temp: result.main.temp,
          main: result.weather[0].main}
        setWeather(fetchResult);
        setQuery('');
        console.log(fetchResult);       
      })
      .catch((err) => console.error('Fehler' + err))
    }
  }
  
  const searchByFavorite = evt => {
    // setQuery(evt.target.value);
    const favInfo = favList.find(x => evt.target.value === `${x.name}, ${x.country}`);
    
    if (typeof favInfo === 'undefined') {
      console.log('typfehler');
    } else {
      setWeather(favInfo);     
    }
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

  // FUNKTIONEN hier definiert
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
    
    setFavList( favList => [
      ...favList,
      weather
    ])
  }

  function uploadFavorite() {
    fetch(sqlApi.base + sqlApi.pushData, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(favList),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  
  // ONEFFECT Event hier notiert
  useEffect(() => {
    const select = document.getElementById('fav-box-id');
    fetch('http://localhost:9191/products')
    .then(resp => resp.json())
    .then(res => {
      console.log('Aus Datenbank gezogene Daten: ', res);
      res.map(element => {
        setFavList(favList => [
          ...favList,
          element]);
        var el = document.createElement('option');
        el.value = `${element.name}, ${element.country}`;
        el.textContent = `${element.name}, ${element.country}`;
        select.appendChild(el);
      })
    })

  }, [])
  

  // Programm Struktur wird hier generiert
  return (
    <div  className={(typeof weather != 'undefined') ? ((weather.temp > 16) ? ('app warm') : ('app')) : ('app')}>
      <main >
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
              //hier ist die Liste der Favoriten
            </select>
          </div>
        </div>

        {(typeof weather.main != 'undefined') ? (
        <div className="info-box">
          <div className="location-box">
            <div className="location" id="location-id">{weather.name}, {weather.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp" id="temp-id">
                {Math.round(weather.temp)}°C
            </div>
            <div className="weather">
              {weather.main}
            </div>
          </div>
        
          <div className="add-favorite-box">
            <button 
              className="add-favorite-button"
              onClick={() => addFavorite(`${weather.name}, ${weather.country}`)}
              alignItems='center'
              >
              <div className="fav-icon">
                <VscDiffAdded size="25px"/>
              </div>
              <div className="fav-text">Favorit hinzufügen</div> 
            </button>

          
            <button 
              className="upload-favorite-button"
              onClick={() => uploadFavorite()}
              alignItems='center'
              >
              <div className="upload-icon">
                <ImUpload2 size="25px"/>
              </div>
              <div className="up-fav-text">Favoriten hochladen</div> 
            </button>
          </div>
          
          
        </div> 
        ) : ('')}


      </main>
    </div>
  );
}

export default App;

import './App.css';
import {useState, useEffect} from 'react';
import Weather from './Components/Weather';
import MCard from './Components/MCard';
import OCard from './Components/OCard';
import SearchBar from './Components/searchBar';
let City = 'London';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);


  const handleFetch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (response.status !== 200) {
        throw new error("oops");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };

  function updateInput (e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    City = searchQuery;
    handleFetch()
    };

    function refresh () {
       window.location.reload();
    };

  
  if (error.error) {
    return (
      <div>
        <h1>An error has occured: {error.message}</h1>
        <button onClick={refresh}> Go Back </button>
      </div>
    );
  } else if (loading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div className="container">
        <h2 className="main-title">Local Weather Forecast</h2>
        <div className="weather-search">
          <div className='searchbar'>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <button className="update-city" onClick={updateInput}>
            Update City
          </button>
          </div> {/* Searchbar buttons */}
        <button className="update-button" onClick={handleFetch}>
          Update Weather Forecast
        </button>
        <div className='line'></div>
        </div> {/* Searchbar buttons */}
        <div className="name_container">
          <div className='city_info'>
            <h1>{data.name}</h1>
            <MCard {...data.main} />
          </div> {/* City & temp info */}
          <div  className='weather'>
            <Weather weather={data.weather} wind={data.wind} />
            <h4>Avg Visibility {data.visibility / 1000}km </h4>
            <OCard {...data.wind} {...data.sys} />
          </div> {/* Forecast & other info */}
        </div> {/* name_container */}
      </div> 
    );
  }
};

export default App;


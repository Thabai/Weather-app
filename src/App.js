import './App.css';
import {useState, useEffect} from 'react';
import Weather from './Components/Weather';
import MCard from './Components/MCard';
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
    return <div>
      <h1>An error has occured: {error.message}</h1>
      <button onClick={refresh} > Go Back </button>
      </div>
  } else if (loading) {
    return <h1>loading...</h1>;
  } else {

    return (

      <div className="container">
        <h2 className="main-title">Local Weather Forecast</h2>
        <div className='weather-search'>
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
      />
        <button className="update-city" onClick={updateInput}>
          Update City
        </button>
        </div>
        <button className="update-button" onClick={handleFetch}>
          Update Weather Forecast
        </button>
      <h1>{data.name}</h1>
      <Weather weather={data.weather}/>
      <MCard {...data.main}/>
      </div>
    );
  }
};

export default App;
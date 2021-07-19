const MCard = ({ temp, feels_like, temp_min, temp_max, pressure, humidity}) => {
    return (
  
            <div className="main-container">
                <h3>Current Temperature {temp}°C </h3>
                <ul >
                  <li> Feels Like {feels_like}°C </li>
                  <li> Minimum Temperature {temp_min}°C </li> 
                  <li> Maximum Temperature {temp_max}°C </li> 
                  <li> Pressure {pressure}mb </li> 
                  <li> Humidity {humidity}% </li>
                </ul>
            </div>

    );
};

export default MCard;
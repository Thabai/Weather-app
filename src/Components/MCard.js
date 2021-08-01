const MCard = ({ temp, feels_like, temp_min, temp_max, pressure, humidity}) => {
    return (
  
            <div>
                <h3>Current Temperature {temp}°C </h3>
                  <p> Feels Like {feels_like}°C </p>
                  <p> Minimum Temperature {temp_min}°C </p> 
                  <p> Maximum Temperature {temp_max}°C </p> 
                  <p> Pressure {pressure}mb </p> 
                  <p> Humidity {humidity}% </p>
            </div>

    );
};

export default MCard;
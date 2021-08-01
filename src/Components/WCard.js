
const WCard = ({ main, description, icon}) => {
    return (
  
            <div className="weather-container">
                <h4>Expected Forecast of {main}</h4>
                <div >
                  <p className='desc'>"{description}"</p>
                  <img src ={`http://openweathermap.org/img/w/${icon}.png`} alt="weather img" />
                </div>
            </div>

    );
};

export default WCard;
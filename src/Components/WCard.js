
const WCard = ({ main, description}) => {
    return (
  
            <div className="weather-container">
                <h4>Expected Forecast of {main}</h4>
                <div >
                  <p className='desc'>"{description}"</p>
                </div>
            </div>

    );
};

export default WCard;
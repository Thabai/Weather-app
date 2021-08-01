import React from "react";
import moment from "moment";

const OCard = ({ sunrise, sunset, speed}) => {
    return (
  
            <div>
                <h4>Wind Speed {Math.floor(speed*2.236937)}mph</h4>
                <div className='suntimes'>
                    <div className='sunbox'>
                    <h2>Sunrise</h2> <p>{moment.unix(sunrise).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                    </div>
                    <div className='sunbox'>
                    <h2>Sunset</h2> <p>{moment.unix(sunset).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                    </div>
                </div>
            </div>

    );
};

export default OCard;
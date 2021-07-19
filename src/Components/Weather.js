import WCard from './WCard';
import React from 'react';


const Weather = ({weather}) => {

 return (
     <div>
     {weather
          .map((data) => {
             return <WCard {...data}/>;
        })}
      </div>
 );
};

export default Weather;
import React from "react";
import "./HourlyForecast.css";
/*import {Skycons} from 'skycons-ts';*/
import moment from 'moment';


const HourlyForecast = props => {

  /* const skycons = new Skycons({'color': 'blue'});
    // on Android, a nasty hack is needed: {'resizeClear': true}
 
    // you can add a canvas by it's ID...
  skycons.add(props.hourlyIcon, props.hourlyIcon);
*/
  return (

    <div className="hourlyForecast">
      <h3>
        <canvas className={props.hourlyIcon} width="75" height="75"></canvas>
      </h3>

      <h3>
        {moment(props.hourlyTime * 1000).format('LT')}
      </h3>
  
      <h4> Temp:
        {props.hourlyTemp}
      </h4>
      
      <h4>Precipitation:
        {props.hourlyPrecip}
      </h4>
    </div>
);
  }
export default HourlyForecast
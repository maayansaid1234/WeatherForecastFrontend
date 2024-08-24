// const ForecastDetails = ({forecast}) => {


// const {city,condition,country,hourlyForecast,precipitation,wind,humidity,temperature}=forecast
//     return (
//         <div className="forecastDetails">
//              <h2>{city}</h2>

//              <h4>{country}</h4>
//          <h1 id="temp">{temperature} °</h1>        
//         <div className="condition">{condition}</div>
//         <div className="moreDetailsContainer">
//             <div>
//             precipitation
//             <br/>
//             {precipitation} mm
//             </div>

//             <div>
//             humidity
//             <br/>
//             {humidity} %
//             </div>

//             <div>
//             wind
//             <br/>
//             {wind} km/h
//             </div>
//         </div>
//                 <ul>
//                 {hourlyForecast.map((item,index)=>{ 
//                   return(
//                         <li key={index}>

//                     <div className="hourlyForecast">
//                         {item.time}
//                         <br/>
//                         {item.temp}°
//                     </div>
//                     </li>)})}
//                </ul>

//         </div>
//     );
// }

// export default ForecastDetails;

import { getLocalDateTimeString } from "../../helpFunctions";
import "./forecastDetails.css";

const ForecastDetails = ({ forecast }) => {
    const { date, city, condition, country, hourlyForecast, precipitation, wind, humidity, temperature } = forecast;
    const dateString = getLocalDateTimeString(new Date(date));

    return (
        <div className="forecastDetails">
            <div id="city">{city}</div>
            <div id="country">{country}</div>
            <div id="date">{dateString}</div>
            <div id="temperature">{temperature}<sup className="degree">°</sup></div>
            <div id="condition">{condition}</div>
            <div id="moreDetailsContainer">
                <div className="detailItem">
                    <span className="lightColor">precipitation</span>
                    <br />
                    <span className="darkColor">{precipitation} mm</span>
                </div>
                <div className="detailItem">
                    <span className="lightColor">humidity</span>
                    <br />
                    <span className="darkColor">{humidity}%</span>
                </div>
                <div className="detailItem">
                    <span className="lightColor">wind</span>
                    <br />
                    <span className="darkColor">{wind} km/h</span>
                </div>
            </div>

            <ul id="hourlyForecast">
                {hourlyForecast.map((item, index) => (
                    <li key={index}>
                        <div className="hourlyForecastItem">
                            <span className="lightColor">{item.time}</span>
                            <br />
                            <span className="darkColor"> {item.temp}<sup className="degree">°</sup></span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ForecastDetails;
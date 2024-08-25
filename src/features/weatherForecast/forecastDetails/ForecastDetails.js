import { getLocalDateTimeString } from "../../../helpFunctions";
import "./forecastDetails.css";

const ForecastDetails = ({ forecast }) => {
    const { date, city, condition, country, hourlyForecast, precipitation, wind, humidity, temperature } = forecast;
    const dateString = getLocalDateTimeString(new Date(date));

    return (
        <div className="forecastDetails" role="region" aria-label="Weather forecast details">
            <div className="locationDetails">
                <h2 id="city">{city}</h2>
                <div id="country" aria-label="Country">{country}</div>
                <div id="date" aria-label="Forecast date">{dateString}</div>
            </div>
            <div className="container">
                <div className="middlePart">
                    <div id="temperature" aria-label="Temperature">{temperature}<sup className="degree" aria-hidden="true">°</sup></div>
                    <div id="condition" aria-label="Weather condition">{condition}</div>
                </div>
                <div id="moreDetailsContainer">
                    <div className="detailItem">
                        <span className="lightColor">precipitation</span>
                        <br />
                        <span className="darkColor" aria-label="Precipitation">{precipitation} mm</span>
                    </div>
                    <div className="detailItem">
                        <span className="lightColor">humidity</span>
                        <br />
                        <span className="darkColor" aria-label="Humidity">{humidity}%</span>
                    </div>
                    <div className="detailItem">
                        <span className="lightColor">wind</span>
                        <br />
                        <span className="darkColor" aria-label="Wind speed">{wind} km/h</span>
                    </div>
                </div>

                <ul id="hourlyForecast" aria-label="Hourly forecast">
                    {hourlyForecast.map((item, index) => (
                        <li key={index}>
                            <div className="hourlyForecastItem">
                                <span className="lightColor">{item.time}</span>
                                <br />
                                <span className="darkColor" aria-label={`Temperature at ${item.time}`}>{item.temp}<sup className="degree" aria-hidden="true">°</sup></span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ForecastDetails;
import { useState } from "react";
import Form from "./cityInputForm/CityInputForm";
import ForecastDetails from "./forecastDetails/ForecastDetails";
import { getForecastByCity } from "./weatherForecastApi";
import "./weatherForecast.css";
import { getLocalDateTimeString } from "../../helpFunctions"

const WeatherForecast = () => {
    const [forecast, setForecast] = useState(null);
    const [showRightSection, setShowRightSection] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const dateString = getLocalDateTimeString(new Date());
    const longitude = forecast?.longitude;
    const latitude = forecast?.latitude;

    const onCheck = async (city) => {
        setShowRightSection(true);
        setErrorMessage("");
        try {
            const res = await getForecastByCity(city);
            const forecast = res.data;
            setForecast(forecast);
        } catch (err) {
            setForecast(null);
            if (err.response?.status === 400) {
                setErrorMessage("Sorry... It seems that there is no such city. Please check your spelling.");
            } else {
                setErrorMessage("Sorry... An error occurred while fetching forecast");
            }
            console.log("An error occurred while fetching forecast");
        }
    };

    return (
        <div id="weatherForecastContainer">
            <div id="leftSection">
                <img src="/fintek.png" alt="Fintek logo" className="logo" />
                <div id="leftSectionRighterSide">
                    <h2 id="appDescription">
                        Use our weather app
                        <br />
                        to see the weather<br />
                        around the world
                    </h2>
                    <Form onCheck={onCheck} />
                    {forecast && <div id="coordinates">
                        latitude {latitude} longitude {longitude}<br />
                        accurate to {dateString}
                    </div>}
                </div>
            </div>

            {showRightSection && (
                <div id="rightSection">
                    {errorMessage ? (
                        <h1>{errorMessage}</h1>
                    ) : (
                        forecast && <ForecastDetails forecast={forecast} />
                    )}
                </div>
            )}
        </div>
    );
};

export default WeatherForecast;
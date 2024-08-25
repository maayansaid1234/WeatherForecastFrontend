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
        <main id="weatherForecastContainer">
            <div id="leftSection">
                <img src="/fintek.png" alt="Fintek logo" className="logo" />
                <h1 id="appDescription">
                    Use our weather app
                    <br />
                    to see the weather<br />
                    around the world
                </h1>
                <Form onCheck={onCheck} />
                {forecast && <div id="coordinates" aria-label="Coordinates and accuracy">
                    latitude {latitude} longitude {longitude}<br />
                    accurate to {dateString}
                </div>}
            </div>

            {showRightSection && (
                <div id="rightSection" role="region" aria-live="polite">
                    {errorMessage ? (
                        <h2 role="alert">{errorMessage}</h2>
                    ) : (
                        forecast && <ForecastDetails forecast={forecast} />
                    )}
                </div>
            )}
        </main>
    );
};

export default WeatherForecast;
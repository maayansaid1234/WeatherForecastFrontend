import axios from "axios"
const baseUrl="http://localhost:3500/api/weatherforecast"

export function getForecastByCity(city){
    return axios.get(`${baseUrl}/${city}`);
}

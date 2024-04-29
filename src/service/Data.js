import axios from "axios";

export const getWeather = (name) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7cf4779e9e3a6c9830e2c18b0a3d3a1a`);
}
import React, { useState } from 'react'
import Search from './Search'
import Display from './Display'
import { WiDayCloudy } from "react-icons/wi";
// import { FaHtml5 } from 'react-icons/fa';


const Weather = () => {

    const [search, setSearch] = useState('')
    const [weatherData, setWeatherData] = useState('')

    async function fetchWeatherData(name) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7cf4779e9e3a6c9830e2c18b0a3d3a1a`)

            const data = await response.json()
            console.log(data);
            if (data.message) {
                return;
            } else {
                setWeatherData(data)
            }
        } catch (e) {
            console.error(e);
        }
    }

    function submitHandler() {
        fetchWeatherData(search)
    }

    return (
        <>
            <div className="img">
                <h2 className='text-center'>Weather App <WiDayCloudy className='cloud' /></h2>
                <Search
                    search={search}
                    setSearch={setSearch}
                    handelSearch={submitHandler}
                />
                {weatherData ? <Display data={weatherData}></Display> : ''}
            </div>
        </>
    )
}

export default Weather
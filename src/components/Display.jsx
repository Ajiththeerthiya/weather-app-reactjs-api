import React from 'react'
import '../Style/display.css'
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaMapLocationDot } from "react-icons/fa6";

const Display = ({ data }) => {
    const celsius = data.main.temp - 273.15;
    const cResult = celsius.toFixed(2)
    return (
        <>
            <div className="container">
                <div className="outer-box">
                    <div className="city-name">
                        <h4 className='name'><FaMapLocationDot className='location'/>
                            {data.name},{data.sys.country}</h4>
                            <hr />
                    </div>
                    <div className="main">
                        <div className="humidity">
                            <h4><WiHumidity className='hum' />
                                Humidity</h4>
                            <h5>{data.main.humidity}</h5>
                        </div>
                        <div className="temp">
                            <h4>Temperature <FaTemperatureHigh className='temprature' />
                            </h4>
                            <h5>{cResult}C</h5>
                        </div>

                    </div>
                    <div className="description">
                        <h5>{data.weather[0].description}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Display
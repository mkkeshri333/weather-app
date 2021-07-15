import React, { useState, useEffect } from 'react';
import classes from './Searchweather.module.css'


const Searchweather = () => {

    const [city, setCity] = useState(null);
    const [cityData, setCitydata] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {

        const fetchApi = async () => {

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b4a29883f5157c3a8facaca529bf05bb`;
            const res = await fetch(url);
            const resJ = await res.json();
            setCity(resJ.main);
            //console.log(city);
        }
        fetchApi();



    }, [search])



    const FuncFetch = props => {

        const fetchWeek = async () => {

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b4a29883f5157c3a8facaca529bf05bb`;
            const res = await fetch(url);
            const resJ = await res.json();
            setCity(resJ.main);
        }

        fetchWeek();

    }

    return (

        <div>
            <div className={classes.mainBox}>

                <form>
                    <input 
                        type="text"
                        placeholder="Search ..........."
                        className={classes.searchBox}
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }} />

                     
                </form>

                {!city ? (
                    <p> No Data Found </p>
                ) : (

                    <div>
                        <h1> {search} </h1>
                        <h1> {((city.temp - 32) * (5 / 9)).toFixed([2])}</h1>
                        <div>
                            <h3> Minimum-Temperature:{((city.temp_min - 32) * (5 / 9)).toFixed([2])}</h3>
                            <h3>Maximum-Temperature:{((city.temp_max - 32) * (5 / 9)).toFixed([2])}</h3>
                        </div>
                    </div>
                )}

                
            </div>




            {!city ? (
                <p className={classes.card}> No Data Found </p>
            ) : (
                <div>
                    <div className={classes.card}>
                        humidity:{city.humidity}
                    </div >

                    <div className={classes.card}>
                        pressure:{city.pressure}
                    </div>
                </div>
            )}
        
        
            
        

        </div>

    )
}

export default Searchweather;


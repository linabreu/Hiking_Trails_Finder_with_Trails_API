import React, { useEffect } from 'react';
import { useState } from 'react';
import Cards from './Cards';
import Footer from './Footer';
import axios from 'axios';
export default function Main() {

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [trailData, setTrailData] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [badSearch, setBadSearch] = useState(false);

      const getCoordinates =  async (city, state) => { //city and state are state variables captured from user input

        let latitude = 0;
        let longitude = 0;
        const coordUrl = `https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?city=${city}&state=${state}&accept-language=en&polygon_threshold=0.0`;
        let coords =  await fetch(coordUrl, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'your key here',
                    'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
                }});


                try {
                    coords =  await coords.json();//reassign
                    latitude = Number(coords[0].lat); //set lat and long as the values retrieved from first API call
                    longitude = Number(coords[0].lon);
                } catch (error) {
                    console.error(error);
                    setBadSearch(true);
                    
                    console.log(badSearch)
                }   

            const trailUrl = `https://trailapi-trailapi.p.rapidapi.com/activity/?lat=${latitude}&limit=20&lon=${longitude}&q-state_cont=${state}&radius=25&q-activities_activity_type_name_eq=hiking`; 
            let trails = await fetch(trailUrl, {
                method: 'GET',
                headers: {
                    "X-RapidAPI-Key": "your key here",
                    "Cookie": "AWSELB=7FEB93771E9434A416BC6005803D1F7E6A0C7818561B8EF42CF88CF2A508013FFC20619E082E74A3DFA70646B785AC869C32F81DE591A1EA166CEFB72B1BF7C07F2F20CE2F; AWSELBCORS=7FEB93771E9434A416BC6005803D1F7E6A0C7818561B8EF42CF88CF2A508013FFC20619E082E74A3DFA70646B785AC869C32F81DE591A1EA166CEFB72B1BF7C07F2F20CE2F"
                },
                redirect: 'follow'
            });
            trails = await trails.json();
            console.log(trails);
            setTrailData(Object.values(trails));
        }

  return (
    <div className = "h-full">
    <div className = "hero-image grid grid-rows-5" >
        <div></div> {/*row 1*/}
        <div className = "row-span-1 col-span-1"> {/*row 2*/}
            <h1 className = "signature text-outline text-white text-center text-3xl md:text-4xl lg:text-6xl" >Your Next Adventure Awaits</h1>
        </div>
        <div className="row-span-1 "> {/*row 3*/}
            <div className = "w-3/4 center">
            <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
                <div>
                    <input id="city" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white dark:focus:border-blue-500 focus:outline-none focus:ring bordered" 
                    onChange={(e) => setCity(e.target.value)} placeholder='City'/>
                </div>
                <div>
                    <select id="state" type="email" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white dark:focus:border-blue-500 focus:outline-none focus:ring bordered"
                    onChange={(e) => setState(e.target.value)}>
                            <option value="Select State" defaultValue="selected">Select State</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="District Of Columbia">District Of Columbia</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="New Jersey">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont<">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button className="px-5 py-3 leading-5 text-white transition-colors duration-200 
                transform bg-sky-600 hover:bg-sky-900 focus:outline-none focus:bg-gray-600" 
                onClick = {()=> {getCoordinates(city,state); setShowResults(true)}}> 
                    Find Hikes
                </button>
            </div>
            </div>
        </div>
        <div></div> {/*row 4*/}
    </div>
        {showResults  === false ? (<div className = "mt-20"></div>):( 
            (
                <Cards trailData = {trailData}/>
           ))}
        
    </div>
  )
}

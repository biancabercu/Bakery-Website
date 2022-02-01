import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nature from '../../../Nature.mp4';

const url="http://localhost:5001/api/v1/posts/marked";
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms";



const Marked = () => {

    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        getAllEvents();
    }, []);

    const getAllEvents = async() => {
        // console.log("Marked"+token);
        axios.get(url,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) =>{
            // console.log(response);
            setEventsList(response.data.response);
        })
    }
    return (
        <div>
            <video autoPlay muted loop id="authvideo">
                <source src={Nature} type="video/mp4" />
            </video>
        <div className="page">
        <div className="keep-overlay">
        <div className="keep-col">
            <h1> Postari active</h1>
            <br></br>
            {eventsList.map(x => 
            <div>
                <p className="show-text">
                    <h3>{x.title}</h3>
                    <br></br>
                    {x.about}
                </p>    
            </div>
            )}
        </div>
        </div>
        </div>
        </div>
    )
}

export default Marked
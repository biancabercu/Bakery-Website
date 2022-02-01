import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = "http://localhost:5001/api/v1/users/volunteer"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"

function AddVolunteer() {
    const [eventName, setEventName] = useState('');
    const [userName, setUserName] = useState('');

    const handleEventName = event => {
        setEventName(event.target.value);
    };
    const handleUserName = event => {
        setUserName(event.target.value);
    };
    const handleAddVolunteer = () => {
        const data = {
            'eventName': eventName,
            'userName': userName
        };
        axios.post(url, data, {
            headers: {
                // Authorization: `Bearer ${token}`
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                alert('AddVolunteer complete!')
            })
            .catch((error) => alert(error.response.data.error));
    };

    return (
        
        <div className="forms">
            {/* <div className="login-left"> */}
            <div> 
                {/* <img src="https://i.pinimg.com/originals/7c/70/5e/7c705e9b979b3dbf29d6f263277406d3.jpg" alt="ilust"></img> */}
                <img src="https://i.pinimg.com/originals/8c/d7/fc/8cd7fc0024fa5de6dc134de68080fc51.jpg" alt="ok"></img>
            </div>
            <div className="forms-right">
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <form>
                <h3>Register as a volunteer!</h3>
                <label>
                    The event's name:<br></br>
                    <input type='text' onChange={handleEventName} />
                </label>
                <br></br>
                <label>
                    Your name:<br></br>
                    <input type='userName' onChange={handleUserName} />
                </label>
                <br></br>
                <button onClick={handleAddVolunteer}>Inscrie-te!</button>
                <br></br>
                <Link to='/User'> Inapoi pe pagina ta</Link>

            </form>
        </div>
    </div>
    );
}

export default AddVolunteer;
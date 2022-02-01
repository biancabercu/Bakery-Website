import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = "http://localhost:5001/api/v1/users"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms";

function DeleteUser() {
    const [username, setUsername] = useState('');

    const handleUsername = event => {
        setUsername(event.target.value);
    };
    const handleDeleteUser = () => {
        const data = {
            'username': username,
            'password': 'admin'
        };
        axios.delete(url, {
            headers: {
                // Authorization: `Bearer ${token}`
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            data
        })
            .then((response) => {
                alert('DeleteUser complete!')
            })
            .catch((error) => alert(error.response.data.error));
    };

    return (
        <div className="forms">
            <div> 
                {/* <img src="https://i.pinimg.com/originals/7c/70/5e/7c705e9b979b3dbf29d6f263277406d3.jpg" alt="ilust"></img> */}
                <img src="https://i.pinimg.com/originals/8c/d7/fc/8cd7fc0024fa5de6dc134de68080fc51.jpg" alt="ok"></img>
            </div>
            <div className="forms-right">
            <br></br><br></br><br></br><br></br><br></br><br></br>

            <form>
                <h3>delete user</h3>
                <label>
                    Username<br></br>
                    <input type='text' onChange={handleUsername} />
                </label>
                <br></br>
                <button onClick={handleDeleteUser}>delete user</button>
                <br></br>
                <Link to='/Admin'> Inapoi pe pagina ta</Link>
            </form>
        </div>
    </div>
    );
}

export default DeleteUser;
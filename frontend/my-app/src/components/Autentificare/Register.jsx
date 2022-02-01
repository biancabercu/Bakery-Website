import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nature from './Nature.mp4';


const url = "http://localhost:5001/api/v1/users/register"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = event => {
        setUsername(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };
    const handleRegister = () => {
        const data = {
            'username': username,
            'password': password
        };
        axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                alert('Register complete!')
            })
            .catch((error) => alert(error.response.data.error));
    };

    return (
        // <div className="forms">
        //     <div className="register-left">
        //     </div>
        //     <div className="forms-right">
        <div>

            <video autoPlay muted loop id="authvideo">
                <source src={Nature} type="video/mp4" />
            </video>


            <div className="video-overlay">

                <div className="forms">
                    <div>
                        <form>
                            <div>
                                <h5>Already have an account? 
                                    <Link to='/login'> Login
                                    </Link>
                                </h5>
                            </div>
                            <h1>Create account</h1>
                            <label>
                                Username <br></br>
                                <input type='text' onChange={handleUsername} />
                            </label>
                            <br></br>
                            <label>
                                Password <br></br>
                                <input type='password' onChange={handlePassword} />
                            </label>
                            <br></br>
                            <button onClick={handleRegister}>Register</button>
                        </form>
                    </div>
                    </div>
                    <div>
                </div>
            </div>
        
        </div>
    );
}

export default Register;
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nature from './Nature.mp4';
import grass from '../../grass.mp4';


const url = "http://localhost:5001/api/v1/users/login"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"
var token_from_login = ''

const Login=()=>{

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleUsername = event => {
        setUsername(event.target.value); 
    };
    const handlePassword = event => {
        setPassword(event.target.value); //aceeasi ca username la admin pls
    };

    const handleLogin = event => {
        event.preventDefault();
        const data = {
            'username': username,
            'password': password
        };
        axios.post( url, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                // const idk=JSON.stringify(response.data);
                // const idk2=JSON.stringify(response.data.response);
                // const idk2token=JSON.stringify(response.data.response.token);
                // console.log("RASP"+idk2token);
                // // localStorage.setItem('token', response.data);
                // localStorage.setItem('token', idk2token);
                // console.log("s a trimis ------------" + JSON.stringify(response));
                // console.log("TOKEN-------" + response.data.response.token)
                token_from_login = response.data.response.token;
                localStorage.setItem("token", token_from_login);
                alert('Login complete!')
            
            })
            .catch((error) => alert(error.response.data.error));
    };


    return (
    //    <div className="forms">
    //        <div className="login-left">
    //        </div>

    //        <div className="forms-right" >
    
                <div>
                    
                    <video autoPlay muted loop id="authvideo">
                        <source src={Nature} type="video/mp4" />
                    </video>


                    
                    {/* <br></br><br></br><br></br><br></br><br></br><br></br> */}
                    <div className="video-overlay">

                        <div className="forms">
                            <div>
                                <form>
                                    <div>
                                        <h5>Don't you have an account? 
                                            <Link to='/register'> Register   
                                            </Link>
                                        </h5>
                                    </div>
                                    <h1>Login</h1>
                                    <label>
                                        Email <br></br>
                                        <input type='text' onChange={handleUsername} />
                                    </label>
                                    <br></br>
                                    <label>
                                        Password <br></br>
                                        <input type='password' onChange={handlePassword} />
                                    </label>
                                    <br></br>
                                    <button onClick={handleLogin}>Login</button>
                                    <br></br>
                                    <br></br>
                                </form>
                            </div>
                            <div>
                                <br></br><br></br><br></br>
                                <button><Link to='/User'> INTRA CA USER</Link></button>
                                <br></br>
                                <br></br>
                                <button><Link to='/Admin'> INTRA CA ADMIN</Link></button>
                                <br></br>
                                <br></br>
                                <button><Link to='/Manager'> INTRA CA MANAGER</Link></button>
                            </div>
                        </div>
                        

                    </div>
                
                </div>
 
        
    )
    
}
export default Login;
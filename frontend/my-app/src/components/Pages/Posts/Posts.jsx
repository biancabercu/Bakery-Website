import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url="http://localhost:5001/api/v1/posts";
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms";
//ADMIN -eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiQURNSU4iLCJpYXQiOjE2MjExMTczNzUsImF1ZCI6InB3IGNsaWVudCIsImlzcyI6InB3IGJhY2tlbmQiLCJzdWIiOiJwdyJ9.VPUGVud7J52LREtl_uIy4iNjA_NwrzjRIEC-9Xomwyg
//MANAGER -  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiTUFOQUdFUiIsImlhdCI6MTYyMTExNzM3NSwiYXVkIjoicHcgY2xpZW50IiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3In0.6JZP1XUp9VphkwozIrvynPPhqwzkWTn-cNn9ATZbxcA
// USER - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiVVNFUiIsImlhdCI6MTYyMTExNzM3NSwiYXVkIjoicHcgY2xpZW50IiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3In0.7qBM09z9ddYzWYCB9J-aKub30vK_AyHjv3DqjArA3Fo


const Posts = () => {

    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async() => {
        axios.get(url,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) =>{
            // console.log(response);
            setPostsList(response.data.response);
        })
    }
    return (
        <div>
            <h1><Link to='/Manager'> Inapoi pe pagina ta</Link></h1>
            {postsList.map(x => 
            <div>
                <div className="booksandauthors">
                    {x.title}
                </div>    
            </div>
            )}
        </div>
    )
}

export default Posts
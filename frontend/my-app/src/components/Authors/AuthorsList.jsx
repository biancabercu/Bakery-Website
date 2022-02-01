import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const url="http://localhost:3008/api/v1/authors";
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms";

const AuthorsList = () => {

    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        getAllAuthors();
    }, []);

    const getAllAuthors = async() => {
        axios.get(url,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) =>{
            console.log(response);
            setAuthorList(response.data.response);
        })
    }

    return (
        <div>
            {authorList.map(x => 
            <div>
                <div className="booksandauthors">
                    {x.firstName}
                </div>    
            </div>
            )}
        </div>
    )
}

export default AuthorsList
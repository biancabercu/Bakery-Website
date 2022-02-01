import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url="http://localhost:3008/api/v1/books";
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms";



const BooksList = () => {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = async() => {
        // console.log("BOOKSLIST"+token);
        axios.get(url,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) =>{
            // console.log(response);
            setBookList(response.data.response);
        })
    }
    return (
        <div>
            {bookList.map(x => 
            <div>
                <div className="booksandauthors">
                    {x.name}
                </div>    
            </div>
            )}
        </div>
    )
}

export default BooksList
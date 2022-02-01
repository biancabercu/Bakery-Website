import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = "http://localhost:5001/api/v1/posts/mark"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"

function Mark() {
    const [title, setTitle] = useState('');

    const handleTitle = event => {
        setTitle(event.target.value);
    };
    const handleMark = () => {
        const data = {
            'title': title,
            'about':'body',
            'marked':0
        };
        axios.post(url, data, {
            headers: {
                // Authorization: `Bearer ${token}`
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                alert('Mark complete!')
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
            <form>
                <h3>Mark a post</h3>
                <label>
                    Title<br></br>
                    <input type='text' onChange={handleTitle} />
                </label>
                <br></br>
                <button onClick={handleMark}>Mark</button>
                <br></br>
                <Link to='/Manager'> Inapoi pe pagina ta</Link>

            </form>
        </div>
    </div>
    );
}

export default Mark;
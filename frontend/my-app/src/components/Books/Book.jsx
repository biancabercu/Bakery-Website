import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Book = ({match}) => {
    const [data, setData] = useState("");
    const { id } = match.params;
    
     useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/book/${id}`)
            .then(response => response.json())
            .then(res => setData(res))
    }, [])

    return (
        <div>
            {data}
        </div>
    )
}

export default Book
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Author=({match})=>{
    const [data,setData]=useState("");
    const {id}=match.params;

    useEffect(() => {
        axios.get(`http://localhost:3008/api/v1/authors/${id}`)
            .then(response => response.json())
            .then(res => setData(res))
    }, [])

    return (
        <div>
            {data}
        </div>
    )
}
export default Author
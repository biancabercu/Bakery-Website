import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nature from '../../../Nature.mp4';

const Manager = () => {

    return (
        <div>
                    
            <video autoPlay muted loop id="authvideo">
                <source src={Nature} type="video/mp4" />
            </video>
            
        <div className="keep-overlay">
        <div className="keep-row">
            <div id="daisy-button">
               <br></br><br></br><br></br>
                <Link to='/events'>PROIECTE IN DESFASURARE</Link>
            </div>
            <div id="daisy-button1">
            <br></br><br></br><br></br>
                <Link to='/unmarked'>POSTARI NEREVIZUITE</Link>
            </div>
            <div id="daisy-button1">
            <br></br><br></br><br></br>
                <Link to='/mark'>MARCHEAZA POSTARI</Link>
            </div>
            <div id="daisy-button2">
            <br></br><br></br><br></br>
                <Link to='/marked'>POSTARI</Link>
            </div>
            
            {/* <button><Link to='/events'>PROIECTE IN DESFASURARE</Link></button>
            <button><Link to='/marked'>POSTARI VIZIBILE</Link></button>
            <button><Link to='/unmarked'> TOATE POSTARILE INCA NEREVIZUITE</Link></button>        
            <button><Link to='/mark'> MARCHEAZA POSTARILE IMPORTANTE</Link></button> */}
        </div>
        <div className="keep-row">
            <div id="whitepage"></div>
        </div>
        <div className="keep-row">
            <div id="whitepage"></div>
        </div>
        <div className="keep-row">
            <div id="whitepage"></div>
        </div>
        </div>
        </div>
    )
}

export default Manager
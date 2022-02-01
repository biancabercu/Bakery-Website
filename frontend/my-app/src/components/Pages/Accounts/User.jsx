import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nature from '../../../Nature.mp4';
const User = () => {

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
                        <Link to='/addvolunteer'>INSCRIE-TE VOLUNTAR</Link>
                    </div>
                    <div id="daisy-button2">
                        <br></br><br></br><br></br>
                        <Link to='/addpost'>ADAUGA POSTARE</Link>
                    </div>
                    <div id="daisy-button3">
                        <br></br><br></br><br></br>
                        <Link to='/marked'>POSTARI</Link>
                    </div>
                    
                {/* <button><Link to='/events'>PROIECTE IN DESFASURARE</Link></button>
                <button><Link to='/marked'>POSTARI</Link></button>
                <button><Link to='/addpost'>ADAUGA POSTARE</Link></button>
                <button><Link to='/addvolunteer'>INSCRIE-TE VOLUNTAR</Link></button> */}
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

export default User
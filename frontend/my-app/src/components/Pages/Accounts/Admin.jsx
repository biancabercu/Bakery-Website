import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nature from '../../../Nature.mp4';

const Admin = () => {

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
                <Link to='/addEvent'>ADAUGA PROIECT</Link>
            </div>
            <div id="daisy-button3">
            <br></br><br></br><br></br>
                <Link to='/marked'>POSTARI</Link>
            </div>
            <div id="daisy-button3">
            <br></br><br></br><br></br>
                <Link to='/charts'>GRAFICE</Link>
            </div>
            </div>


            <div className="keep-row">
            <div id="daisy-button2">
            <br></br><br></br><br></br>
                <Link to='/addUser'>ADAUGA USER</Link>
            </div>
            <div id="daisy-button2">
            <br></br><br></br><br></br>
                <Link to='/editUser'>MODIFICA USER</Link>
            </div>
            <div id="daisy-button2">
            <br></br><br></br><br></br>
                <Link to='/deleteUser'>STERGE USER</Link>
            </div>
            </div>

            <div className="keep-row">
            <div id="whitepage"></div>
            </div>
            <div className="keep-row">
            <div id="whitepage"></div>
            </div>
           
            
            
            {/* <button><Link to='/events'>PROIECTE ACTIVE</Link></button>
            <button><Link to='/marked'>POSTARI</Link></button>
            <button><Link to='/addEvent'> ADAUGA PROIECT</Link></button>
            <button><Link to='/charts'> ACTIVITATE(GRAFICE)</Link></button>
            <button><Link to='/addUser'> ADAUGA USER</Link></button>    
            <button><Link to='/deleteUser'> STERGE USER</Link></button>    
            <button><Link to='/editUser'> MODIFICA USER</Link></button>     */}
        </div>
        </div>
    )
}

export default Admin



          

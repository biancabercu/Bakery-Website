import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    return (
        <div className="front-page">
        <div>
            <h2>Despre noi</h2>
            <p>Vrem să trăim într-o lume sănătoasă și pașnică. O lume în care pădurile prosperă, apele sunt pline de viață, iar animalele altă dată amenințate cu dispariția sunt libere și-n siguranță. O lume în care calitatea vieții se măsoară în relații, nu în lucruri. În care hrana noastră este nutritivă și crescută cu dragoste. Unde aerul pe care-l respirăm este curat. O lume în care toți trăim cu demnitate și în care toți suntem fericiți. Nimeni nu poate face asta singur, dar n-avem niciun dubiu că împreună putem reuși!</p>
            <h2>Despre voluntariat</h2>
            <p> "A bread for a life" este cu și despre oameni, acțiune, soluții pentru mediu înconjurător. Suntem prezenți în România încă din 2007, iar voluntarii ocupă un rol central în activitatea noastră. Avem nevoie de oameni ca tine, oameni hotărâți și dedicați cărora le pasă de natură și care se pot implica activ pentru a face din viitor un loc mai bun pentru toate viețuitoarele. Punem accent pe implicare, proactivitate și ne plac oamenii sinceri și curajoși!</p>
            <h3>Cum a inceput aceasta idee?</h3>
            <p>Fondatorii sunt chiar oameni simpli, venind din locuri unde foametea si lipsa naturii isi faceau tot mai mult simtita prezenta. Anual brutariile arunca aproximtativ o treime din produsele obtinute si acest lucru ar trebui redirectionat catre o cauza mai buna, spun fondatorii. Multe persoane in Romania inca sufera de foamete.</p>
            
            <br></br>
            <br></br>
            <h2>Un proiect ambitios peste care ne-am extins in prezent?</h2>
            <p>Cu totii stim ca aparitia Covid a facut ca multe afaceri sa dea faliment, si mai multe persoane sa ramana fara venituri si implicit o lipsa s-a resimtit la nivel de tara.</p>
            <h3>Ce ne dorim la nivel de proiect?</h3>
            <p>Sa reusim sa contribuim la reducerea foametei agravate in aceasta perioada, sa continuam sa ne ingrijim de natura si vietuitoarele care sufera la fel de mult impreuna cu noi.</p>
            <h4>Mai jos se poate observa un grafic constant actualizat cu situatia Covid-19 in prezent in Romania:</h4>
            <img src="https://corona.dnsforfamily.com/graph.png?c=RO" alt="alternatetext" ></img>
        </div>
        </div>
    )
}

export default Home
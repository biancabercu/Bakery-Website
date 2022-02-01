import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from '../counter';
import { Link } from 'react-router-dom';


const Layout = ({children}) => {

    return(
        <div className="layout">
            
            {/* <Header/> */}
            {/* <div class="banner">
                <img src="https://ak.picdn.net/shutterstock/videos/30634471/thumb/6.jpg" alt="stars"></img>
                <div class="banner-text">COUNTER</div>
            </div> */}
            <div className="mainApp">
                <div className="left-App">
                    <h3>BOOKISH</h3>
                </div>
                   
                
                <div className="content">
                    <Link to='/authorList'> 
                    <button className="button">Authors</button>
                    </Link>
                    <Link to='/bookList'>    
                    <button className="button">Books</button>
                    </Link>
                    <Link to='/login'>    
                    <button className="button">Login</button>
                    </Link>
                    
                    {children}
                </div>
            </div>
            <Counter/>
            <Footer/>
        </div>
    )
}

export default Layout;
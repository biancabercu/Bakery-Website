import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import { Nav} from "react-bootstrap"; 
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap-theme.css';
// import '../css/style.css';
import Home from '../Pages/Home';
import Login,{Register} from '../Autentificare';
import Events, { AddEvent } from '../Pages/Events';
import AddVolunteer from '../Pages/Volunteers';
import Posts,{Mark,Marked, AddPost, Unmarked} from '../Pages/Posts';
import AddUser, { DeleteUser, EditUser } from '../Pages/Users';
import Charts from '../Pages/Charts';
import User, { Admin, Manager } from '../Pages/Accounts';



class Header extends Component{

    constructor(){
        super();

        this.state = {
          activeTab : "tab1",
          search: "" 
        }

        this.changeSearch= this.changeSearch.bind(this);
        this.changeActive= this.changeActive.bind(this);
    }

    changeActive(e){
       this.setState({activeTab: e.target.id})
    }

    changeSearch(e){
        this.setState({
            search: document.getElementById("search").value
        }, ()=>{
            console.log("hello");
        })
     }

    

    render(){

        //let activeClass= this.state.active +"nav-item";

        return(
            <div>
                <Router>

                        {/* <Nav className="navbar navbar-expand-sm bg-dark navbar-dark navItems">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to='/'><div id="tab1" onClick={this.changeActive} className={(this.state.activeTab === "tab1") ? "active nav-link " : "nav-link"}>Despre noi</div></Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/events'><div id="tab2" onClick={this.changeActive} className={(this.state.activeTab === "tab2") ? "active nav-link" : "nav-link"}>Proiecte si evenimente</div></Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/marked'><div id="tab3" onClick={this.changeActive} className={(this.state.activeTab === "tab3") ? "active nav-link" : "nav-link"}>Postari</div></Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/login'><div id="tab4" onClick={this.changeActive} className={(this.state.activeTab === "tab4") ? "active nav-link" : "nav-link"}>Intra in contul tau</div></Link>
                                </li>

                            </ul> */}
                            
                                {/* <div className="searchBox">

                                    <form className="form-inline float-lg-right" action="/">
                                        <div>
                                            <input className="form-control mr-sm-2" id="search" type="text" placeholder="Patient Name" />
                                            <Link to='/searchpatient'>
                                                <button  className="btn btn-success" onClick={(e)=>{this.changeSearch(e); this.changeActive(e)}} type="submit">
                                                    <div className="searchButton" required>Search Patient</div>
                                                </button>
                                            </Link>
                                        </div>
                                    </form>

                                </div> */}
                        {/* </Nav> */}

                    <Route exact strict path='/' component={Login}/>
                    <Route exact strict path='/events' component={Events}/>
                    <Route exact strict path='/marked' component={Marked}/>
                    <Route exact strict path='/unmarked' component={Unmarked}/>
                    <Route exact strict path='/login' component={Login}/>
                    <Route exact strict path='/register' component={Register}/>
                    <Route exact strict path='/User' component={User}/>
                    <Route exact strict path='/Manager' component={Manager}/>
                    <Route exact strict path='/Admin' component={Admin}/>
                    <Route exact strict path='/addvolunteer' component={AddVolunteer}/>
                    <Route exact strict path='/mark' component={Mark}/>
                    <Route exact strict path='/posts' component={Posts}/>
                    <Route exact strict path='/addpost' component={AddPost}/>
                    <Route exact strict path='/addEvent' component={AddEvent}/>
                    <Route exact strict path='/charts' component={Charts}/>
                    <Route exact strict path='/addUser' component={AddUser}/>
                    <Route exact strict path='/deleteUser' component={DeleteUser}/>
                    <Route exact strict path='/editUser' component={EditUser}/>

                    {/*<Route path='/search/' component={(props) => (<SearchNewsComponent {...props} search={this.state.searchText}/>)}/>
                    */}
              
        </Router>
      </div>
                )
            }
}

export default Header;
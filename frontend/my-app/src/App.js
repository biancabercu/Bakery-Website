// import logo from './logo.svg';
import React from 'react';
import './App.scss';

import Counter from './components/counter';
import Layout from './components/layout';
import Login,{Register} from './components/Autentificare';
import AuthorsList, {Author} from './components/Authors';
import BooksList, {Book} from './components/Books';
import Header from'./components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App-all">
      <div className="language-select">
        <LanguageSelect /> 
      </div>
      <h1>SAVE A LIFE, SAVE THE NATURE</h1>
      {/* <div className="example-text">
        <p>{t("hello_welcome_to_react")}</p>
      </div> */}
      <Header/>
    </div>
    // <div >
    //     <Router>
    //       <Layout> 
    //         <Switch>
    //           <Route exact path={"/"}>
    //             <Link to="/login">Login/Autentificare</Link>
    //             <br />
    //             <Link to="/authorList">Authors</Link>
    //             <br />
    //             <Link to="/bookList">Books</Link>
    //           </Route>
    //           <Route path='/login' component={Login} />
    //           <Route path='/register' component={Register} />
    //           <Route path='/book/:id' exact component={Book} />
    //           <Route path='/author/:id' exact component={Author} />
    //           <Route path='/bookList' component={BooksList} />
    //           <Route path='/authorList' component={AuthorsList} />
    //         </Switch>
    //       </Layout>
    //     </Router>
    //   </div>
    
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

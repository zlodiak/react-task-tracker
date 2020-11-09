import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import './App.css';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Page3 from './components/page3/Page3';
import Auth from './components/auth/auth/Auth';
import { setLoggedAC } from './redux/authReducer';

function App(props) {
  function renderUserArea() {
    return (
      <div className="wrap">
        <aside className="aside">
          <NavLink to="/page1" className="nav-link">page1</NavLink>
          <NavLink to="/page2" className="nav-link">page2</NavLink>
          <NavLink to="/page3" className="nav-link">page3</NavLink>
          <NavLink to="/auth" className="nav-link">auth</NavLink>
        </aside>

        <div className="content">
          <div className="content-inner">
            <header className="header">
              <div className="header-inner">
                <div className="login-label">You logged as: { props.isLogged }</div>
                <button onClick={ () => props.setLoggedAC(false) }>Logout</button>
              </div>
            </header>

            <main className="main">
              <Switch>
                <Route exact path='/' render={ () => <Page1/> }/>
                <Route exact path='/page1' render={ () => <Page1/> }/>
                <Route exact path='/page2' render={ () => <Page2/> }/>
                <Route exact path='/page3' render={ () => <Page3/> }/>
                <Route exact path='/auth' render={ () => <Auth/> }/>
              </Switch>
            </main>

            <footer className="footer">
              <div>footer</div>
            </footer>            
          </div>
        </div>        
      </div>      
    );
  }

  return (
    <BrowserRouter>
      <div className="wrap-outer">

        { props.isLogged && renderUserArea() }
        { !props.isLogged && <Auth className="auth-modal"/> }
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isLogged: state.authReducer.isLogged,
  }
}

export default connect(mapStateToProps, { setLoggedAC })(App);

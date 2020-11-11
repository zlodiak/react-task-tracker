import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import './App.css';
import Tasks from './components/tasks/Tasks';
import Add from './components/add/Add';
import Profile from './components/profile/Profile';
import Auth from './components/auth/auth/Auth';
import { setLoggedAC } from './redux/actions';

function App(props) {
  function renderUserArea() {
    return (
      <div className="wrap">
        <aside className="aside">
          <NavLink to="/Tasks" className="nav-link">Tasks</NavLink>
          <NavLink to="/Add" className="nav-link">Add</NavLink>
          <NavLink to="/Profile" className="nav-link">Profile</NavLink>
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
                <Route exact path='/' render={ () => <Tasks/> }/>
                <Route exact path='/Tasks' render={ () => <Tasks/> }/>
                <Route exact path='/Add' render={ () => <Add/> }/>
                <Route exact path='/Profile' render={ () => <Profile/> }/>
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

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Login from '../login/Login';
import Registration from '../registration/Registration';
import classes from './Auth.module.css';


function Auth(props) {
  return (
    <div className="auth-modal">
      <div className={ classes.authModalInner }>
        { props.displayMode === 'login' && <Login/> }
        { props.displayMode === 'registration' && <Registration/> }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    displayMode: state.authReducer.displayMode,
  }
}


export default connect(mapStateToProps, null)(Auth);

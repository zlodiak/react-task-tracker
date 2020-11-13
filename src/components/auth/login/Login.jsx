import React, { useState } from 'react';
import { connect } from 'react-redux';

import { tryLoginThunk, fillGendersThunk, fillUsersThunk, fillTasksThunk } from '../../../redux/actions';


function Login(props) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login-form">
      <input 
        type="text" 
        onChange={ e => setLogin(e.target.value) } 
        value={ login || '' }
        placeholder="login"
      />
      <br />
      <input 
        type="password" 
        onChange={ e => setPassword(e.target.value) } 
        value={ password || '' }
        placeholder="password"
      />
      <br/>
      <button onClick={ () => { props.tryLoginThunk(login, password); props.fillGendersThunk(); props.fillUsersThunk(); props.fillTasksThunk() } }>login</button>
    </div>
  );
}


export default connect(null, { tryLoginThunk, fillGendersThunk, fillUsersThunk, fillTasksThunk })(Login);

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import authService from '../../authService';

function Auth() {
  const history = useHistory();

  const [form, setForm] = useState([{
    login: '',
    password: '',
  }]);

  const auth = () => {
    authService.checkAuthenticate(form.login, form.password);
    if(authService.isAuthenticated) {
      alert('auth is successfull');
      setForm({ login: '', password: '' });
      history.push("/page3");
    } else {
      alert('auth is failed');
    }
  }

  return (
    <>
      <div className="login-form">
        <input type="text" onChange={ e => setForm({ ...form, login: e.target.value }) } value={ form.login || '' }/>
        <br />
        <input type="password" onChange={ e => setForm({ ...form, password: e.target.value }) } value={ form.password || '' }/>
        <br/>
        <button onClick={ auth }>auth</button>
      </div>
    </>
  );
}

export default Auth;

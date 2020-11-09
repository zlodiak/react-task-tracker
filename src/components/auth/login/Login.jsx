import React, { useState } from 'react';
import { checkCredentials } from '../../../api/users';

function Login() {
  const [form, setForm] = useState([{
    login: '',
    password: '',
  }]);

  const login = () => {
    checkCredentials
      .then(users => {
        users.forEach(user => {
            console.log(user)
        });
      });
  }  

  return (
    <div className="login-form">
      <input 
        type="text" 
        onChange={ e => setForm({ ...form, login: e.target.value }) } 
        value={ form.login || '' }
        placeholder="login"
      />
      <br />
      <input 
        type="password" 
        onChange={ e => setForm({ ...form, password: e.target.value }) } 
        value={ form.password || '' }
        placeholder="password"
      />
      <br/>
      <button onClick={ login }>login</button>
    </div>
  );
}

export default Login;

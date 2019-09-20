import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const state = {
  credentials: {
    username: '',
    password: ''
  }
}

const Login = () => {
  const [creds, setCreds] = useState([])

  const handleChange = e => {
    console.log(e.target)
    setCreds({
      ...creds,
      [e.target.name]: e.target.value 
    })
  }

  const login = e => {
    console.log(creds, e)
    e.preventDefault();
    axiosWithAuth().post ('/api/login', creds.credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload);
      e.history.push('/protected');
    })
    .catch(err => console.log(err));
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input 
        type='text'
        name='username'
        placeholder='Username'
        value={creds.username}
        onChange={handleChange}
        />
        <input 
        type='password'
        name='password'
        placeholder='Password'
        value={creds.password}
        onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;

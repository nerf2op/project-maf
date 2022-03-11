import React from 'react'
import './Login.css'
function Login(prop) {
  return (prop.tri)?(
    <div class="form">
    <h2>Login Here</h2>
    <input type="email" name="email" placeholder="Enter Email Here"/>
    <input type="password" name="" placeholder="Enter Password Here"/>
    <button class="btnn"><a href="#">Login</a></button>
    <p class="link">Don't have an account</p>
    <a href="#">Sign up  here</a>
    <p class="liw">Log in with</p>
</div>
  ):"";
}

export default Login

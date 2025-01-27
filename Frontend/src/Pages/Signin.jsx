import React from 'react'

const Signin = () => {
  return (
    <div className="backg">
    <Nava/>


<div class="container">
<h2 className='name text-center mt-5'>SIGNIN</h2>
<form action="" id="form">

    <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" name = "username"/>

    </div>
    <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name = "password"/>
       
    </div>
    <button type="button" class="btn btn-dark">Login</button>
</form>
</div>
        
  <Footer/>
</div>
  )
}

export default Signin

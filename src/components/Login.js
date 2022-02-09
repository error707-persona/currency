import { TextField, Box, Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';



const Login = ({handleClose}) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    

    // const handleSubmit=()=>{
      
    // }
    // const handleClose=()=>{

    // }
  return (
  <Box style={{display: "flex", flexDirection:"column", gap:"20px"}}>
  <form onSubmit={(e)=>login(e)}>
  <Box
  p = {3}
 >
      <TextField
      variant="outlined"
      id="email"
      type="email"
      label="Enter Email"
      placeholder='Enter email'
      value={email}
      fullWidth
      onChange={(e)=>setemail(e.target.value)}
      >
          
      </TextField>
      <br/>
      <TextField
      variant="outlined"
      id="password"
      type="password"
      label="Enter Password"
      placeholder='Enter Password'
      value={password}
      fullWidth
      onChange={(e)=>setpassword(e.target.value)}
      >
          
      </TextField>
      <br/>
      <Button
      variant="contained"
      type="submit"
      size="large"
      style={{backgroundColor:"white"}}

      >Login</Button>
      
  </Box>
  </form>

  </Box>
  )
}

function login(e){
  e.preventDefault();
  let request = {
    email:document.getElementById('email').value,
    password:document.getElementById('password').value
  }
  axios.post('http://localhost:3000/login', request)
  .then(resp=>{
    alert(resp.data.message);
  
   
  })
  .catch(err=>{
    console.log(err);
  })
}

export default Login;

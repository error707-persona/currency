import { TextField, Box, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

const Login = ({handleClose}) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    

    const handleSubmit=()=>{}
  return <Box
  p = {3}
  style={{display: "flex", flexDirection:"column", gap:"20px"}}
  
  >
      <TextField
      variant="outlined"
      type="email"
      label="Enter Email"
      placeholder='Enter email'
      value={email}
      fullWidth
      onChange={(e)=>setemail(e.target.value)}
      >
          
      </TextField>
      <TextField
      variant="outlined"
      type="email"
      label="Enter Password"
      placeholder='Enter Password'
      value={password}
      fullWidth
      onChange={(e)=>setpassword(e.target.value)}
      >
          
      </TextField>
      
      <Button
      variant="contained"
      size="large"
      style={{backgroundColor:"white"}}
      onClick={handleSubmit}
      >Login</Button>
  </Box>
};

export default Login;

import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { CryptoState } from './Cryptocontext';

const Signup = ({handleClose}) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
  const {setAlert} = CryptoState()
    const handleSubmit=()=>{
        if (password!==confirmpassword){
          setAlert({
            open:true,
            message: "Password do no match",
            type:"error",
          })
        }
    }
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
      <TextField
      variant="outlined"
      type="email"
      label="Enter Confirm Password"
      placeholder='Enter Confirm Password'
      value={confirmpassword}
      fullWidth
      onChange={(e)=>setconfirmpassword(e.target.value)}
      >
          
      </TextField>
     
      <Button
      variant="contained"
      size="large"
      style={{backgroundColor:"white"}}
      onClick={handleSubmit}
      >Sign Up</Button>
  </Box>
};

export default Signup;

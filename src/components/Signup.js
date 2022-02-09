import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { CryptoState } from './Cryptocontext';
import axios from 'axios';
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
          return;
        }
        // try{
        //   const result = await createUserWithEmailAndPassword();
        //     console.log(result);
        //     handleClose();
        // }catch(error){
        //   setAlert({
        //     open:true,
        //     message: error.message,
        //     type: "error",

        //   }
    }
  return <Box
  p = {3}
  style={{display: "flex", flexDirection:"column", gap:"20px"}}
  
  >
    <form onSubmit={(e)=>signup(e)}>
      <TextField
      variant="outlined"
      type="email"
      id="email"
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
      type="password"
      id="password"
      label="Enter Password"
      placeholder='Enter Password'
      value={password}
      fullWidth
      onChange={(e)=>setpassword(e.target.value)}
      >
          
      </TextField>
      <br/>
      <TextField
      variant="outlined"
      type="password"
      id="confirmpassword"
      label="Enter Confirm Password"
      placeholder='Enter Confirm Password'
      value={confirmpassword}
      fullWidth
      onChange={(e)=>setconfirmpassword(e.target.value)}
      >
          
      </TextField>
      <br/>
      <Button
      variant="contained"
      size="large"
      id="submit"
      type="submit"
      style={{backgroundColor:"white"}}
      // onClick={handleSubmit}
      >Sign Up</Button>
      </form>
  </Box>
};
function signup(e){
  e.preventDefault();
  
  let request = {
    email:document.getElementById('email').value,
    password:document.getElementById('password').value
  }
  axios.post('http://localhost:3000/signup', request)
  .then(resp=>{
    alert(resp.data.message);
  })
  .catch(err=>{
    console.log(err);
  })
}

export default Signup;

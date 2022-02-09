import { Snackbar } from '@material-ui/core';
import React from 'react';
import {CryptoState} from "./Cryptocontext"
import MuiAlert from "@material-ui/lab/Alert"
const  Alert = () => {
    const {alert, setAlert} = CryptoState();


    const handleClose=(event, reason)=>{
        if (reason==="clickaway"){
            return;
        }
        setAlert({open:false})
    }
  return <Snackbar
  onClose={handleClose}
    open={alert.open}
      
      autoHideDuration={3000}
     
  >
      
      <MuiAlert
      variant="filled"
      elevation = {10}
      onClose={handleClose}
      severity={alert.type}
      
      >{alert.message}
  </MuiAlert>
  </Snackbar>
};

export default Alert;

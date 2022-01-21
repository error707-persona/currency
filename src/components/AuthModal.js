import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Button } from '@material-ui/core';
import { Tabs, Tab, TabPanel} from '@material-ui/core';
import { useState } from 'react';
import Login from "./Login";
import Signup from './Signup';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      width:400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderColor:"white",
    color: "white",
    boxShadow: theme.shadows[5],
    borderRadius: 10,
  },
}));

export default function AuthModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setvalue] = useState(1);
  const handleChange= (event, newValue)=>{
    setvalue(newValue);
  };

  return (
    <div>
      <Button variant="contained"
      style={{
          width: 85,
          height: 40,
          marginLeft: 15,
          backgroundColor:"white"
      }}
      onClick={handleOpen}
      >Login</Button> 
        
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar position='static'
            style={{backgroundColor:"transparent", color:"white"}}
            
            >
                
  <Tabs value={value} onChange={handleChange}
   value={value}
   variant="fullWidth"
   style={{borderRadius:10}}
  >
    <Tab label="Login" handleClose={handleClose}/>
    <Tab label="Register" handleClose={handleClose}/>
    
  </Tabs>
 </AppBar>
{value==0 && <Login/>}
{value==1 && <Signup/>}
           

          </div>
        </Fade>
      </Modal>
    </div>
  );
}


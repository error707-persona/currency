import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Homepage from './components/Homepage';
import { makeStyles, Snackbar } from '@material-ui/core';
import CoinPage from './components/CoinPage';

import Footer from './components/Footer'

// import MuiAlert from "@material-ui/lab/Alert";
import Alert from '@material-ui/lab/Alert';

function App() {
  const useStyles= makeStyles(()=>({
    App:{
      backgroundColor:"#232131 ",
      color:"white",
      minHeight:'100vh',
    },
  })

  );

  const classes = useStyles()
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage/>} exact/>
      <Route path="/coins/:id" element={<CoinPage/>} exact/>
      {/* <Route path="/profile" element={<Profile/>} exact/>
      <Route path="/news" element={<News/>} exact/>
      <Route path="/contactus" element={<Contactus/>} exact/> */}
     
      </Routes>
      
    </div>
   
    </BrowserRouter>
  );
}

export default App;

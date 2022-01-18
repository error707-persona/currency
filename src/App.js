import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Homepage from './components/Homepage';
import { makeStyles } from '@material-ui/core';
import CoinPage from './components/CoinPage';
import Profile from './components/Profile';


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
      <Route path="/profile" element={<Profile/>} exact/>
     
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

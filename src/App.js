import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Currencies from './components/Currencies';
import Homepage from './components/Homepage';
import { makeStyles } from '@material-ui/core';

function App() {
  const useStyles= makeStyles(()=>({
    App:{
      backgroundColor:"#37383C",
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
      <Route path="/coins/:id" element={<Currencies/>} exact/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { CoinList } from '../config/api';
const Crypto = createContext()

const Cryptocontext = ({children}) => {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] =useState("₹");
    const [coins, setCoins] = useState([])
    const [loading, setloading] = useState(false);
    const [user, setuser] = useState(null);
    const [alert, setalert] = useState({
        open:false,
        message:"",
        type:"success",
    });
    //states are for changing variables and setting state usestate takes initial parmeter


    const fecthCoins = async () =>{
        setloading(true)
        const {data} =await axios.get(CoinList(currency));
        setCoins(data);
        setloading(false);
    };

    useEffect(() => {
        if (currency==="INR") setSymbol("₹");
        else if (currency==="USD") setSymbol("$");

    }, [currency])


    return (
        <Crypto.Provider value={{currency, symbol, setCurrency, coins, loading, fecthCoins, alert, setalert}}>
            {children}
        </Crypto.Provider>
    )
}

export default Cryptocontext

export const CryptoState=()=>{
    return useContext(Crypto)
}

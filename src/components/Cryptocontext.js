import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { CoinList } from "../config/api";
import { userinfo } from "../utils/auth";

const Crypto = createContext();

const Cryptocontext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState(null);
  const userw = JSON.parse(userinfo());
  const [watchlist, setwatchlist] = useState([]);
 

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  //states are for changing variables and setting state usestate takes initial parmeter

  const fecthCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setloading(false);
  };

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider
      value={{
        currency,
        symbol,
        setCurrency,
        coins,
        loading,
        fecthCoins,
        alert,
        setAlert,
        watchlist,
        setwatchlist,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default Cryptocontext;

export const CryptoState = () => {
  return useContext(Crypto);
};

import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import {React, useState, useEffect} from 'react'
import  {useParams} from "react-router-dom"
import { SingleCoin } from '../config/api';
import { numberWithCommas } from './Banner/Carousel';
import CoinInfo from "./CoinInfo";
import { CryptoState } from './Cryptocontext';

const CoinPage = () => {

    const {id} = useParams();
    const [coin, setcoin] = useState();
    const {currency, symbol} = CryptoState();



    const fecthCoin = async () =>{
        const {data} = await axios.get(SingleCoin(id));
        setcoin(data);
    };

    

    useEffect(() => {
        fecthCoin();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(coin);
    const useStyles =makeStyles((theme)=>({
        container:{
            display:"flex",
            [theme.breakpoints.down("md")]:{
                flexDirection:"column",
                alignItems:"center",

            },

        },
        sidebar:{
            width:"30%",
            [theme.breakpoints.down("md")]:{
                width:"100%",
            },
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            marginTop:25,
            borderRight:"2px solid grey",
        },
        heading:{
            fontWeight:"bold",
            marginBottom: 20,
            alignItems:"center"
         
        },
        description:{
            width:"100%",
            padding:25,
            paddingBottom:15,
            paddingTop:0,
            textAlign:"justify"
        },
        marketData:{
            alignSelf:"start",
            padding: 25,
            paddingTop: 10,
            width: "100%",
            [theme.breakpoints.down("md")]:{
                display: "flex",
                justifyContent:"space-around",
            },
            [theme.breakpoints.down("sm")]:{
                flexDirection: "column",
                alignItems:"center",
            },
            [theme.breakpoints.down("xs")]:{
                alignItems: "start",
              
            },
        }
    }));
    // console.log(coin.image)
    const classes = useStyles();
    if (!coin) return <LinearProgress style={{backgroundColor:"#442ACE"}}/>
    return (
        <div className={classes.container}>
          <div className={classes.sidebar}>
              <img src={coin?.image.large}
              alt = {coin?.name}
              height = "200"

              style={{marginBottom: 20, paddingTop:70}}/>
              <Typography variant="h3" className={classes.heading}>
                  {coin?.name}
              </Typography>
              <Typography variant="subtitle1" className={classes.description}>
                  {/* {ReactHtmlParser(coin?.description.en.split(". ")[0])}. */}
                  {coin?.description.en.split(". ")[0]}.
              </Typography>
            <div className={classes.marketData}>
                <span style={{display:"flex"}}>
                    <Typography variant="h5" className={classes.heading}
                    >
                        Rank:
                    </Typography>
                    &nbsp;&nbsp;
                    <Typography
                    variant="h5"
                    >
                        {coin?.market_cap_rank}
                    </Typography>
                </span>
                <span style={{display:"flex"}}>
                    <Typography variant="h5" className={classes.heading}
                    >
                        Currenct Price:
                    </Typography>
                    &nbsp;&nbsp;
                    <Typography
                    variant="h5"
                    >   {symbol}{" "}
                        {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()].toString())}
                    </Typography>
                </span>
                <span style={{display:"flex"}}>
                    <Typography variant="h5" className={classes.heading}
                    >
                        Market Cap:
                    </Typography>
                    &nbsp;&nbsp;
                    <Typography
                    variant="h5"
                    >{symbol}{" "}
                        {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0,-6))}M
                    </Typography>
                </span>
            </div>
          </div>
          <CoinInfo coin={coin}/>
        </div>
    )
}

export default CoinPage

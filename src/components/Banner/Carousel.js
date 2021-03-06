import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { Link } from '@material-ui/core'
import {React, useState, useEffect} from 'react'

import { CryptoState } from '../Cryptocontext'

import {TrendingCoins} from "../../config/api"
import AliceCarousel from 'react-alice-carousel'
import { Navigate } from 'react-router-dom'

const navigate = Navigate
const useStyles = makeStyles((theme)=>({
    carousel:{
        height:"50%",
        display:"flex",
        alignItems:"center",


    },
    carouselItem:{
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        cursor:"pointer",
        textTransform:"uppercase",
        color:"white"
    }
}));

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Carousel = () => {

    const [trending, settrending] = useState([])

    const classes = useStyles();

    const {currency, symbol} = CryptoState()

    const fetchTrendingCoins = async () =>{
        const {data} = await axios.get(TrendingCoins(currency))

        settrending(data)
    };

    console.log(trending)

    useEffect(() => {
        fetchTrendingCoins();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);
    
    const items = trending.map((coin)=>{

        let profit = coin.price_change_percentage_24h>=0;

        return (
            <div className={classes.carouselItem}>
            <Link  to={`/coins/${coin.id}`} >
                
                <img src={coin?.image}
                alt={coin.name}
                height="80"
                style={{marginBotton: 10}}></img>
                 <br/>
                <span style={{color:"white"}}>{coin?.symbol}&nbsp;
                <span style={{color:profit>0?"rgb(14,203,129)":"red", fontWeight:500}}
                
                >
                    {profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                    <br/>
                <span style={{fontSize:22, fontWeight:500}}>
                    {symbol}{" "}
                     {numberWithCommas(coin?.current_price.toFixed(2))}

                </span>
                </span>
               
            </Link> </div>
        )
    })
    const responsive = {
        0:{
            items:2,
        },
        512:{
            items:4
        }
    }

    return (
        <div className={classes.carousel}>
            <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>
    )
}

export default Carousel

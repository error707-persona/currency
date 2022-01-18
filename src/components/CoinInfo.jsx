import axios from 'axios';
import {React, useEffect, useState} from 'react'
import CoinsTable from './CoinsTable'
import { HistoricalChart } from '../config/api';
import {CryptoState} from './Cryptocontext';
import { makeStyles, ThemeProvider, createTheme,MenuItem,Select, CircularProgress } from '@material-ui/core';
import {Line} from "react-chartjs-2"
import Chart from 'chart.js/auto'



const CoinInfo = (coin) => {

    const [historicalData, sethistoricalData] = useState();
    const [days, setdays] = useState(1);
    const coindata = coin?.coin
    const {currency} = CryptoState();
//    console.log(coin.id, days, currency);
    const fetchhistoricalData = async () => {
        const {data} = await axios.get(HistoricalChart(coindata.id, days, currency));

        sethistoricalData(data.prices);
        
    };
    console.log("coin", historicalData)
    useEffect(() => {
        fetchhistoricalData();
        
    }, [currency, days]); 
    const useStyles = makeStyles((theme)=>({
        container:{
            width:"75%",
            diplay:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            marginTop:"25",
            padding:40,
            [theme.breakpoints.down("md")]:{
                width:"100%",
                marginTop:0,
                padding:20,
                paddingTop:0,
            },
        }

    }));
    
    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#442ACE",
            },
            type:"dark",
        },
    });
    const [color, setcolor] = useState("white")
    // const dt = arr.map((time_date)=>{
    //     return time_date[0]
    // });
    // console.log("map",dt)
    // let d = new Date(1642426160415);
    // console.log("d",d.getHours());
    const generateColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    // const colors = this.generateColor();
    // console.log(colors)

    const classes = useStyles();
    return (
       <ThemeProvider theme={darkTheme}>
           <div className={classes.container}>
               {
                   !historicalData ? (
                       <CircularProgress
                       
                        style={{marginLeft: 370, marginTop: 250, alignSelf:"center", color:"white"}}
                        size={100}
                        thickness={2}
                       />
                   ):(<>
                   <Select
          variant="outlined"
          value={color}
          style={{
            marginTop:50,
            width:100,
            height:40,
            marginleft:15,
            color:"white"
            
        }}
           onChange={(e)=>setcolor(e.target.value)}
        >
          <MenuItem value={"white"}><em>White</em></MenuItem>
          <MenuItem value={"#FF490B"}>Red</MenuItem>
          <MenuItem value={"blue"}>Blue</MenuItem>
          <MenuItem value={"#69FFA8"}>Green</MenuItem>
        </Select>

                    <Line style={{marginTop:30}}
                    data={{labels: historicalData.map((time_date)=>{
                        let date = new Date(time_date[0]);
                        let time = date.getHours()>12 
                        ? `${date.getHours()-12}:${date.getMinutes()}PM`
                        : `${date.getHours()}:${date.getMinutes()}AM`;
                    return days===1?time:date.toLocaleDateString()
                    }),

                    datasets:[{
                        data:historicalData.map((coin)=>coin[1]),
                        label: `Price(Past ${days} Days) in ${currency}`,
                        borderColor:color
                    },],
                    }}
                    options={{
                        elements:{
                            
                                point:{
                                    radius:1,
                                }
                            
                        }
                    }}
                    />
   
                   </>)
               }
           </div>

       </ThemeProvider>
    )
}

export default CoinInfo

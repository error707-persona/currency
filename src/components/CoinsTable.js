import { 
    ThemeProvider, 
    createTheme, 
    Container,
    Typography, 
    TextField, 
    TableContainer, 
    LinearProgress,
    TableCell,
    TableBody,
    Table,TableHead, TableRow, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Classnames } from 'react-alice-carousel';
import { useNavigate } from 'react-router-dom';
import { CoinList } from '../config/api';
import { numberWithCommas } from './Banner/Carousel';
import {CryptoState } from "./Cryptocontext"


const CoinsTable = () => {


    const [coins, setCoins] = useState([])
    const [loading, setloading] = useState(false);
    const [search, setsearch] = useState("");
    const [page, setpage] = useState(1);
    const history = useNavigate()

    const {currency, symbol} = CryptoState();
    
    const fecthCoins = async () =>{
        setloading(true)
        const {data} =await axios.get(CoinList(currency));
        setCoins(data);
        setloading(false);
    };
    console.log(coins);
    
    useEffect(()=>{ 
        fecthCoins();

    }, [currency]);

    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            type:"dark",
        },
    })

    const handleSearch = () => {
        return coins.filter((coin)=>(
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search) 
        ))
    }
    
    const useStyles = makeStyles(()=>({
        table:{
            borderTopWidth: 1, borderStyle: 'solid', borderRadius:"5"
           
        },
        row:{
            backgroundColor:"#1B1A23",
            cursor:"pointer",
            color:"white",
            "&:hover":{
                backgroundColor: "#442ACE",
             

                

            },
            fontFamily:"fantasy"
        },
        pagination:{
            "& .MuiPaginationItem-root":{
            color:"#442ACE"
        },
        

        },
        tablecell:{
            color:"white",
           

        }
    }));

    const classes = useStyles()

    return (
        <ThemeProvider theme={darkTheme}>
<Container style={{textAlign:"center"}}>
        <Typography

        variant="h4"
        style={{margin:18, fontFamily:"fantasy"}}

        
        > Cryptocurrency Market Cap</Typography>
        <TextField label="Search Crypto Currency" variant="outlined"
        style={{marginBottom:20, width:"100%"}}
        onChange={(e)=>setsearch(e.target.value)}
        ></TextField>
       

        <TableContainer>
            {
                loading?(
                    <LinearProgress style={{backgroundColor:"#442ACE"}}/>
                ):<Table className={classes.table}>
                    <TableHead style={{backgroundColor:"#442ACE"}}>
                        {["Coin", "Price", "24h Change", "Market Cap"].map((head)=>(
                        <TableCell 
                        style=
                        {{color:"black", 
                        fontWeight:"700", 
                        fontFamily:"fantasy"}} 
                        key={head}
                        align={head==="Coin"?"":"right"}>
                            {head}
                        </TableCell>
                        )
                        )}
                    </TableHead>
                    <TableBody>
                        {handleSearch()
                        .slice((page-1)*10, (page-1)*10+10)
                        .map(row=>{
                            const profit = row.price_change_percentage_24h>0;
                            return (
                                <TableRow
                                onClick={()=>history.push(`/coins/${row.id}`)}
                                className={classes.row}
                                key={row.name}>
                                    <TableCell component='th' scope="row" className={classes.tablecell} style={{
                                        display:"flex",
                                        gap:15,
                                       
                                    }}>
                                        <img 
                                        src={row?.image}
                                        alt={row.name}
                                        height="50"
                                        style={{marginBottom:10}}/>
                                        <div style={{display:"flex", flexDIrection:"column" }}>
                                            <span style={{textTransform:"uppercase", fontSize:22}}
                                            >
                                               {row.symbol} 
                                            </span>
                                            <br/>
                                            <span style={{color:"darkgrey"}}>{row.name}</span>
                                        </div>

                                   
                                    </TableCell>
                                    <TableCell
                                    align="right" className={classes.tablecell}
                                    >
                                    {symbol}{" "}
                                    {row.current_price.toFixed(2)}
                                    </TableCell>
                                    
                                    <TableCell
                                    align="right"
                                    style={{color:profit>0?"rgb(14,203,129)":"red", fontWeight:500 }}>
                                            
                                            {profit && "+"}

                                            {numberWithCommas(row.price_change_percentage_24h.toFixed(2))}%
                                    </TableCell>
                                    <TableCell
                                    align="right" className={classes.tablecell}
                                    >
                                    {symbol}{" "}
                                    {numberWithCommas(row.market_cap.toString().slice(0,-6))}
                                    </TableCell>
                                </TableRow>
                            )
                        })} 
                    </TableBody>
                </Table>
                }
        </TableContainer>
        <Pagination count={(handleSearch()?.length/10).toFixed(0)}
        style={{padding:20,
        width:"100%",
        display:"flex",
        justifyContent:"center",
        }}
        classes={{ul:classes.pagination}}
        onChange={(_, value)=>{
            setpage(value);
            window.scroll(0,450);
        }}
        >

        </Pagination>
</Container>
        </ThemeProvider>
    )
}

export default CoinsTable

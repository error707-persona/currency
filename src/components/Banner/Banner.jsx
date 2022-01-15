import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';
const useStyles = makeStyles(()=>({

    banner:{
        backgroundImage:"url(./banner3.jpg)",
        
    objectFit: 'cover'
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:100,
        fontFamily:"Alegreya Sans SC",
        justifyContent:"space-around",
    }
}));

const Banner = () => {
    const classes = useStyles();
    return (

        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                    variant="h2"
                    style={{
                        fontheight:"bold",
                        marginBottom: 15,
                        fontFamily:"Alegreya Sans SC"    
                    }}
                    >
                        Crypto Currency
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    style={{
                        color:"darkgrey",
                        textTransform:"capitlaize",
                        fontheight:"bold",
                        marginBottom: 15, 

                    }}
                    >
                        Get all the stuff you wannt
                    </Typography>
                </div>
                <Carousel/>
            </Container>
        </div>
    )
}

export default Banner

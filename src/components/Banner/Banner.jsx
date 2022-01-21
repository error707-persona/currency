import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';
const useStyles = makeStyles(()=>({

    banner:{
        backgroundImage:"url(./banner3.jpg)",
        backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			height: "100%"
    
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:100,
        fontFamily:"Alegreya Sans SC",
        justifyContent:"space-around",
    },
    darkOverlay:{
       
        backgroundColor: "rgba(0, 0, 0, 0.65)",
      
        
          

    }
}));

const Banner = () => {
    const classes = useStyles();
    return (
        
        <div className={classes.banner}>
            <div className={classes.darkOverlay}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                    variant="h2"
                    style={{
                        fontheight:"bold",
                        marginBottom: 15,
                        fontFamily:"Alegreya Sans SC"  ,
                        color:"white",
                        textAlign:"center"
                    }}
                    >
                        Crypto Currency
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    style={{
                        color:"white",
                        textTransform:"capitlaize",
                        fontheight:"bold",
                        marginBottom: 15, 
                        textAlign:"center"

                    }}
                    >
                        You Own crypto currency tracker platform
                    </Typography>
                </div>
                <Carousel/>
              
            </Container>
        </div>
        </div>
    )
}

export default Banner

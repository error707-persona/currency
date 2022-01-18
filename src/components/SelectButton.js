import { makeStyles } from '@material-ui/core'
import React from 'react'


const SelectButton = ({children, selected, onClick}) => {

    const useStyles = makeStyles({
        selectedbutton:{
            border: "1px solid white",
            borderRadius: 5,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            color:selected?"black":"white",
            cursor:"pointer",
            backgroundColor:selected?"white":"",
            fontWeight: selected?700:500,
            "&:hover":{
                backgroundColor:"white",
                color:"black",
            },
            width:"22%",
        }
    });

    const classes = useStyles();

    return (
        <span className={classes.selectedbutton} onClick={onClick}>
            {children}
        </span>
    )
}

export default SelectButton

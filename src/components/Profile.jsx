import {React, useState} from 'react'
import CoinsTable from './CoinsTable'
import {Card, CardContent, Typography, CardActions, makeStyles, Button} from "@material-ui/core"
import {getToken, getUser} from '../utils/auth'


const Profile = () => {
  const [user, setuser] = useState("")
    const useStyles = makeStyles({
        pos:{

        },
        root:{

        },
        title:{
            
        }
    });

    const getToken = () => {
      if (getToken && getUser){
        setuser(getUser.email)
      }
    }
    
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
         bull
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            
        </div>
    )
}

export default Profile

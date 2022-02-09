import React from "react";
import { Box,Link, Container, Grid } from "@material-ui/core";
const Footer = () => {
    
    return <footer>

        <Box>
            <Container px ={{xs:3, sm:10}} py bgcolor="text.secondary" maxWidth="lg" color="white">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                        Navigate
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                        Important links
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                        Contact us
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                    <Box>
                        <Link to="" color="inherit">Home</Link>
                    </Box>
                </Grid>
                <Box>
                        Made by Areesha Sayed
                    </Box>
            </Grid>
            </Container>
        </Box>
        </footer>
}

export default Footer

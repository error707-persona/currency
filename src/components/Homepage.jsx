import { BottomNavigation } from '@material-ui/core'
import React from 'react'
import Banner from './Banner/Banner'
import CoinsTable from './CoinsTable'
import Footer from './Footer'

const Homepage = () => {
    return (
        <>
        <Banner/>
        <CoinsTable/>
        <Footer/>
        </>
    )
}

export default Homepage

import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import The from '../components/The'
import Img from '../components/Img'
import Service from '../components/Service'

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Banner/>
            <The/>
            <Img/>
            <Service/>
        </div>
    )
}

export default Home
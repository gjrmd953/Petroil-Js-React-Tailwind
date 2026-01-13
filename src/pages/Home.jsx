import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import The from '../components/The'
import Img from '../components/Img'
import Service from '../components/Service'
import Learn from '../components/Learn'

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Banner/>
            <The/>
            <Img/>
            <Service/>
            <Learn/>
        </div>
    )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import The from '../components/The'
import Img from '../components/Img'
import Service from '../components/Service'
import Learn from '../components/Learn'
import Logo from '../components/Logo'
import Card from '../components/Card'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

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
            <Logo/>
            <Card/>
            <Map/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default Home
import React from 'react'
import Container from './Container'
import banner from '../assets/banner.png';

const Banner = () => {
    return (

        <div className="h-195 bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }} >


            <Container>
                <div className="relative  h-screen flex items-center">
                    <div>
                        <h1 className="font-pop text-praimary font-bold text-6xl leading-normal">
                            We exist since 1975 on the <br />
                            oil and gas industry.
                        </h1>

                        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner

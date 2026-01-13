import React from 'react'
import Container from './Container'
import banner from '../assets/banner.png';

const Banner = () => {
    return (

        <div className="h-195 bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }} >


            <Container>
                <div className="py-65">
                    <h1 className='font-pop text-praimary font-bold text-6xl w-220 leading- leading-tight'>
                        We exist since 1975 on the oil and gas industry.
                    </h1>

                    <button className='font-pop font-semibold text-praimary px-8 py-3 bg-[#F40404] mt-8 cursor-pointer'>
                        LEARN MORE
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Banner

import React from 'react'
import OneImg from "../assets/one.png"
import TwoImg from "../assets/two.png"
import ThreeImg from "../assets/three.png"
import FourImg from "../assets/four.png"
import Container from './Container'

const Logo = () => {
    return (
        <div className='py-28'>
            <Container>
                <div className="flex justify-between ">
                    <img src={OneImg} alt="" />
                    <img src={TwoImg} alt="" />
                    <img src={ThreeImg} alt="" />
                    <img src={FourImg} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Logo
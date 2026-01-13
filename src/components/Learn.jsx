import React from 'react'
import LearnImg from "../assets/learn.png"
import Container from './Container'

const Learn = () => {
    return (
        <div className='py-34 bg-[#F0F0F0]'>
            <Container>
                <div className="flex">
                    <div className="w-1/3">
                        <h2>
                            Learn more about our company
                        </h2>
                    </div>
                    <div className="w-2/3">
                        <img src={LearnImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Learn
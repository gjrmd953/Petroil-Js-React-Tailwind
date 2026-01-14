import React from 'react'
import LearnImg from "../assets/learn.png"
import Container from './Container'

const Learn = () => {
    return (
        <div className='py-34 bg-[#F0F0F0]'>
            <Container>
                <div className="flex">
                    <div className="w-1/3">
                        <div className="bg-[#F40404] h-full">
                            <h2 className='font-pop py-24 pl-[90px] font-bold text-4xl text-praimary leading-tight'>
                            Learn more <br /> about our <br /> company
                        </h2>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${LearnImg})` }} >
                            <h2 className='font-pop font-bold text-[#F40404] py-3.5 px-7 bg-white w-fit absolute top-[148px] left-[320px] cursor-pointergit'>Learn More</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Learn
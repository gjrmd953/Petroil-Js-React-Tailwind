import React from 'react'
import Container from './Container'
import { IoIosArrowForward } from 'react-icons/io'
import CardImg1 from "../assets/card1.png"
import CardImg2 from "../assets/card2.png"
import CardImg3 from "../assets/card3.png"

const Card = () => {
    return (
        <div className='py-28 bg-[#F0F0F0]'>
            <Container>
                <div className="flex justify-between gap-18">
                    <div className="w-1/3 bg-[#00000099]  bg-cover bg-center relative"  style={{ backgroundImage: `url(${CardImg1})` }} >
                        <h2 className=' font-pop font-bold text-praimary text-2xl pl-13 pt-18 '>
                            lorem ipsum dolor <br />sit amet <br /> consectetur <br /> adipiscing elit sed <br /> do eiusmod.
                        </h2>
                        <button className=' font-pop font-semibold text-praimary mt-10 ml-13 mb-14 py-2.5 px-4 bg-[#FFFFFF80] cursor-pointer'>
                            Read more
                        </button>
                    </div>
                    <div className="w-1/3 bg-[#00000099] bg-cover bg-center relative" style={{ backgroundImage: `url(${CardImg2})` }}>
                        <h2 className='font-pop font-bold text-praimary text-2xl pl-13 pt-18 '>
                            lorem ipsum dolor <br />sit amet <br /> consectetur <br /> adipiscing elit sed <br /> do eiusmod.
                        </h2>
                        <button className='font-pop font-semibold text-praimary mt-10 ml-13 mb-14 py-2.5 px-4 bg-[#FFFFFF80] cursor-pointer'>
                            Read more
                        </button>
                    </div>
                    <div className="w-1/3 bg-[#00000099] bg-cover bg-center relative" style={{ backgroundImage: `url(${CardImg3})` }}>
                        <h2 className='font-pop font-bold text-praimary text-2xl pl-13 pt-18 '>
                            lorem ipsum dolor <br />sit amet <br /> consectetur <br /> adipiscing elit sed <br /> do eiusmod.
                        </h2>
                        <button className='font-pop font-semibold text-praimary mt-10 ml-13 mb-14 py-2.5 px-4 bg-[#FFFFFF80] cursor-pointer'>
                            Read more
                        </button>
                    </div>
                </div>

                <div className="flex justify-end items-center pt-7 cursor-pointer">
                    <h2 className='font-pop font-bold text-[hsl(0,0%,0%)]'>MORE FROM THE BLLOG</h2>
                    <IoIosArrowForward className='font-bold text-[#000000]' />
                </div>
            </Container>
        </div>
    )
}

export default Card
import React from 'react'
import Container from './Container'
import LogoImg from "../assets/logo.png"
import { MdOutlineEmail } from 'react-icons/md'
import { LuPhoneCall } from 'react-icons/lu'
import { GrMap } from 'react-icons/gr'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-[144px] bg-[#1F1F1F]'>
            <Container>
                <div className="flex">
                    <div className="w-2/5">
                        <img src={LogoImg} alt="" />
                        <div className="flex items-center gap-1">
                            <MdOutlineEmail className='text-praimary' />
                            <h3 className='font-pop text-praimary'>
                                mail@yourcompany.com
                            </h3>
                        </div>
                        <div className="flex items-center gap-1">
                            <LuPhoneCall className='text-praimary' />
                            <h3 className='font-pop text-praimary'>
                                +896 120 5889 (Toll free)
                            </h3>
                        </div>
                        <div className="flex items-center gap-1">
                            <GrMap className='text-praimary' />
                            <h3 className='font-pop text-praimary'>
                                101 Baker Street, New York, USA, 12345
                            </h3>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-[#F40404] p-2 rounded-full">
                                <FaFacebookF className=' text-praimary' />
                            </div>
                            <div className="bg-[#F40404] p-2 rounded-full">
                                <FaTwitter className=' text-praimary' />
                            </div>
                            <div className="bg-[#F40404] p-2 rounded-full">
                                <FaLinkedinIn className=' text-praimary' />
                            </div>
                            <div className="bg-[#F40404] p-2 rounded-full">
                                <FaInstagram className=' text-praimary' />
                            </div>
                        </div>
                    </div>

                    <div className="w-1/5">
                        <h2 className='font-pop font-bold text-[16px] text-praimary cursor-pointer'>Company</h2>
                        <ul className='font-pop font-bold text-[12px] text-praimary cursor-pointer'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                    <div className="w-1/5">

                    </div>
                    <div className="w-1/5">

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
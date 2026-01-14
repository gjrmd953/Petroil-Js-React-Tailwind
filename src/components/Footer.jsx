import React from 'react'
import Container from './Container'
import LogoImg from "../assets/logo.png"
import CertoneImg from "../assets/certone.png"
import CerttwoImg from "../assets/certtwo.png"
import { MdOutlineEmail } from 'react-icons/md'
import { LuPhoneCall } from 'react-icons/lu'
import { GrMap } from 'react-icons/gr'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-[144px] bg-[#1F1F1F]'>
            <Container>
                <div className="flex pb-42.5">
                    <div className="w-2/5">
                        <img src={LogoImg} alt="" className='pb-5'/>
                        <div className="flex items-center gap-1 pb-4">
                            <MdOutlineEmail className='text-praimary' />
                            <h3 className='font-pop text-praimary'>
                                mail@yourcompany.com
                            </h3>
                        </div>
                        <div className="flex items-center gap-1 pb-4">
                            <LuPhoneCall className='text-praimary' />
                            <h3 className='font-pop text-praimary'>
                                +896 120 5889 (Toll free)
                            </h3>
                        </div>
                        <div className="flex items-center gap-1 pb-6">
                            <GrMap className='text-praimary' />
                            <h3 className='font-pop text-praimary'>
                                101 Baker Street, New York, USA, 12345
                            </h3>
                        </div>

                        <div className="flex gap-4 cursor-pointer">
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
                        <h2 className='font-pop font-bold text-[16px] text-praimary pb-5'>Company</h2>
                        <ul className='font-pop font-bold text-[12px] text-praimary cursor-pointer'>
                            <li className='pb-4'>Home</li>
                            <li className='pb-4'>About</li>
                            <li className='pb-4'>Services</li>
                            <li className='pb-4'>Gallery</li>
                        </ul>
                    </div>
                    <div className="w-1/5">
                          <h2 className='font-pop font-bold text-[16px] text-praimary pb-5'>Others</h2>
                        <ul className='font-pop font-bold text-[12px] text-praimary cursor-pointer'>
                            <li className='pb-4'>Blog</li>
                            <li className='pb-4'>Contact</li>
                            <li className='pb-4'>Terms & Conditions</li>
                            <li className='pb-4'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="w-1/5">
                          <h2 className='font-pop font-bold text-[16px] text-praimary pb-5'>Certificate</h2>
                          <div className="flex gap-1">
                            <img src={CertoneImg} alt="" />
                            <img src={CerttwoImg} alt="" />
                          </div>
                    </div>
                </div>
            </Container>
        </div>
        
    )
}

export default Footer
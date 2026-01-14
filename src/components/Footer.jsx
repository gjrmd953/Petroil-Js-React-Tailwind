import React from 'react'
import Container from './Container'
import LogoImg from "../assets/logo.png"
import { MdOutlineEmail } from 'react-icons/md'
import { LuPhoneCall } from 'react-icons/lu'
import { GrMap } from 'react-icons/gr'

const Footer = () => {
    return (
        <div className='pt-[144px] bg-[#1F1F1F]'>
            <Container>
                <div className="">
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
                    </div>
                    <div className="w-1/5">

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
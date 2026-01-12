import React from 'react'
import Container from './Container'
import { MdOutlineEmail } from 'react-icons/md'
import { LuPhoneCall } from 'react-icons/lu'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='py-4 bg-[#282828]'>
            <Container>
                <div className='flex items-center'>
                    <div className="w-1/2 flex gap-8">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <MdOutlineEmail className='text-praimary' />
                            <h2 className='font-pop text-praimary'>mail@yourcompany.com</h2>
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer">
                            <LuPhoneCall className='text-praimary' />
                            <h2 className='font-pop text-praimary'>+896 120 5889 (Toll free)</h2>
                        </div>

                    </div>
                    <div className="w-1/2">
                        <div className=" flex justify-end text-praimary gap-4 items-center cursor-pointer">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedinIn />
                            <FaInstagram />

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className='py-7 bg-[#F40404]'>
            <Container>
                <div className="flex items-center">
                    <div className="w-1/3">
                        <div className="">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="w-2/3">
                    </div>
                    <div className="">
                        <ul className='flex font-pop text-praimary cursor-pointer gap-10 items-center'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Gallery</li>
                            <li className='pr-7'>Blog</li>
                            <li className='py-3 px-8 border-2'>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
import React from 'react'
import MapImg from "../assets/map.png"
import Container from './Container'

const Map = () => {
    return (
        <div>
            <div className="">
                <img src={MapImg} alt="" className='w-full' />
            </div>
            <div className="bg-[#F40404]">
                <Container>
                    <div className="flex justify-between py-12">
                        <h2 className=' font-pop font-bold text-4xl text-praimary'>
                            Want to join as member branch in your area?
                        </h2>
                        <button className=' py-3 px-8 w-fit border-2 font-pop font-semibold text-praimary cursor-pointer'>
                            CONTACT
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Map
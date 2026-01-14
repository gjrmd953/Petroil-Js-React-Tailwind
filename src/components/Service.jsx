import React from 'react'
import BanpipeImg from "../assets/banpipe.png"
import FuilImg from "../assets/fuil.png"
import WeldingImg from "../assets/welding.png"

const Service = () => {
    return (
        <div className='pt-2'>
            <div className="flex">
                <div className="w-1/2 pl-85 ">
                   <div className="pt-25">
                     <h2 className='font-pop font-bold text-[64px] text-secondary'>Our Services</h2>
                    <p className='font-pop text-tertiary '>
                        It is a long established fact that a reader will be <br /> distracted by the readable content of a page <br /> when looking at its layout.
                    </p>
                   </div>
                </div>
                <div className="w-1/2">
                    <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${BanpipeImg})` }}>
                        <div className="absolute bg-[#00000065]"></div>

                        <h2 className='font-pop font-bold text-praimary text-4xl pt-36 pl-28 pb-8'>
                            Modern natural oil and gas refineries.
                        </h2>
                        <button className='font-pop font-semibold text-praimary py-2.5 px-4 bg-[#F40404] ml-28 mb-36'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2">
                    <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${WeldingImg})` }}>
                        <div className="absolute bg-[#00000065]"></div>

                        <h2 className='font-pop font-bold text-praimary text-4xl pt-36 pl-28 pb-8'>
                            Supply of national industries.
                        </h2>
                        <button className='font-pop font-semibold text-praimary py-2.5 px-4 bg-[#F40404] ml-28 mb-36'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${FuilImg})` }}>
                        <div className="absolute bg-[#00000065]"></div>

                        <h2 className='font-pop font-bold text-praimary text-4xl pt-36 pl-28 pb-8'>
                            National fuel distribution and supply.
                        </h2>
                        <button className='font-pop font-semibold text-praimary py-2.5 px-4 bg-[#F40404] ml-28 mb-36'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
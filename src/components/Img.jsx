import React from 'react'
import CarImg from "../assets/car.png"
import PampImg from "../assets/pamp.png"
import ShipImg from "../assets/ship.png"
import PiepImg from "../assets/piep.png"

const Img = () => {
  return (
    <div>
         <div className='flex justify-between py-3 gap-7'>
                <div className="w-1/4">
                    <img src={CarImg} alt="" className='w-full'/>
                </div>
                <div className="w-1/4">
                    <img src={PampImg} alt="" className='w-full'/>
                </div>
                <div className="w-1/4">
                    <img src={ShipImg} alt="" className='w-full'/>
                </div>
                <div className="w-1/4">
                    <img src={PiepImg} alt="" className='w-full'/>
                </div>
            </div>
    </div>
  )
}

export default Img
import React from 'react'
import CarImg from "../assets/car.png"
import PampImg from "../assets/pamp.png"
import ShipImg from "../assets/ship.png"
import PiepImg from "../assets/piep.png"

const Img = () => {
  return (
    <div>
         <div className='flex justify-between py-3'>
                <div className="">
                    <img src={CarImg} alt="" />
                </div>
                <div className="">
                    <img src={PampImg} alt="" />
                </div>
                <div className="">
                    <img src={ShipImg} alt="" />
                </div>
                <div className="">
                    <img src={PiepImg} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Img
import React from 'react'
import Container from './Container'

const Card = () => {
  return (
    <div className='py-28'>
             <Container>
                <div className="flex justify-between gap-16">
                    <div className="w-1/3 bg-[#00000099]">
                         <h2>
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                         </h2>
                         <button>
                            Read more
                         </button>
                    </div>
                    <div className="w-1/3 bg-[#00000099]">
                         <h2>
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                         </h2>
                         <button>
                            Read more
                         </button>
                    </div>
                    <div className="w-1/3 bg-[#00000099]">
                         <h2>
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                         </h2>
                         <button>
                            Read more
                         </button>
                    </div>
                </div>
             </Container>
    </div>
  )
}

export default Card
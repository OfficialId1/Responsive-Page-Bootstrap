import React from 'react';
import { FaPlus, FaQuoteLeft } from 'react-icons/fa6';
import Shubha from './Assests/Shubha.png'

export default function Testimonials() {
  return (
    <div className='p-4 bg-light rounded'>
        <div className='h5'><FaQuoteLeft />&emsp; Testimonials</div><br />
        <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, incidunt iusto voluptatum veniam amet praesentium eligendi tenetur eveniet cumque aut maiores non consequatur quis libero, sunt facilis ea magnam nihil. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, incidunt iusto voluptatum veniam amet praesentium eligendi tenetur eveniet cumque aut maiores non consequatur quis libero, sunt facilis ea magnam nihil.
        </div><br />
        <div>
            <img src={Shubha} alt="Shubha" className='rounded-circle'/>
            <div>Shubha Nagarajan</div>
            <div className='text-primary'>Classic Dancer</div>
        </div>
    </div>
  )
}

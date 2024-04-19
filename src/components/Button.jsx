import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button
    className='flex justify-center items-center gap-2 px-7 py-4 border bg-coral-red rounded-md'>
      <p
      className='font-montserrat text-lg leading-none text-white border-coral-red font-bold'>{label}</p>
          
          {iconURL && <img src={iconURL} 
          alt="arrowRightIcon"
          className='ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button
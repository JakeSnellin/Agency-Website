import React from 'react'

export default function Studio() {
  return (
    <div className='md:flex h-678'>
        <div className='md:flex flex-wrap content-between'>
            <h1 className='text-m1 md:text-h1/leading-h1 w-full'>Studio</h1>
            <div>
                <h3 className='text-m3 md:text-h3/leading-h3'>Contact</h3>
                <h4 className='text-m4 md:text-h4/leading-h4'>Email - email@email.com</h4>
                <h4 className='text-m4 md:text-h4/leading-h4'>Phone - 07702139052</h4>
            </div>
        </div>
        <div className='md:flex flex-wrap content-between'>
            <h4 className='text-m4 md:text-h4/leading-h4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h4>
            <div className='h-36'>
                <div className='bg-red-500 h-36 w-36 inline-block'></div>
                <div className='bg-blue-500 h-36 w-36 inline-block'></div>
            </div>
            <h3 className='text-m4 md:text-h4/leading-h4'>Please get in touch. We are based in London but work with international clients. Please get in touch. We are based in London but work with international clients.</h3>
        </div>
    </div>
  )
}

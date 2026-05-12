import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    const [isactive, setIsActive] = useState(false)
    return (
        <>
            <header className='flex justify-between items-center px-[40px] bg-[#ffffff] border-b-[1px] border-gray-300 lg:px-40'>
                <div className='hidden max-sm:block '>
                    <button onClick={() => setIsActive(true)} className='flex gap-4' >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className='text-2xl font-bold text-primary'>
                    <h2>
                        <span className='text-red-500'>E</span>commerce
                    </h2>
                </div>
                <ul className='flex gap-4 max-sm:hidden '>
                    <NavLink to="/" className='hover:underline decoration-primary decoration-amber-50 aria-[current=page]:underline aria-[current=page]:text-amber-300'>Home</NavLink>
                    <NavLink to="/products" className='hover:underline decoration-primary decoration-amber-50 aria-[current=page]:underline aria-[current=page]:text-amber-300'>Products</NavLink>
                    <NavLink to="/About" className='hover:underline decoration-primary decoration-amber-50 aria-[current=page]:underline aria-[current=page]:text-amber-300'>About</NavLink>
                    <NavLink to="/Contact" className='hover:underline decoration-primary decoration-amber-50 aria-[current=page]:underline aria-[current=page]:text-amber-300'>Contact</NavLink>
                </ul>
                <div className='flex gap-4'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-red-500 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>
                </div>
            </header>
            <header
                className={`${isactive ? 'left-0' : '-left-full' } fixed top-0 h-screen w-\[260px\] z-50 pt-9 p-4 bg-third text-white transition-all duration-300 sm:hidden`} >
                <div className="flex justify-end  ">
                    <button onClick={() => setIsActive(false)} className='border border-white border-dashed rounded-full p-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='flex flex-col mt-4'>
                    <NavLink to="/" className='hover:bg-gray-700 p-2 rounded-lg hover:text-red-500 '>+ Home</NavLink>
                    <NavLink to="/products" className='hover:bg-gray-700 p-2 rounded-lg hover:text-red-500 '>+ Shop</NavLink>
                    <NavLink to="/about" className='hover:bg-gray-700 p-2 rounded-lg hover:text-red-500 '>+ About</NavLink>
                    <NavLink to="/contact" className='hover:bg-gray-700 p-2 rounded-lg hover:text-red-500 '>+ Contact</NavLink>
                </div>
            </header>
        </>
    )
}

export default Header

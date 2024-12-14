import React, { useState } from 'react'
import "./Header.css"
import hamburager from "../../images/icon-hamburger.svg"

function Header() {

    const [openHamburger, setOpenHamburger] = useState(false)

    return (
        <header className='py-6'>
            <div className="container mx-auto px-4 flex justify-between items-center">
                < div className="header-logo " >
                    <a href="#"><h2 className='text-4xl font-bold text-slate-50'>sunnyside</h2></a>
                </div >
                <nav className="header-nav" aria-label="Main navigation">
                    <ul className={`hidden md:flex justify-between gap-7 font-bold text-slate-200
                         ${openHamburger ? "open-hamburger" : ""}`
                    }>
                        <li><a href="#about" className='header-link transition-all duration-300 hover:text-white'>About</a></li>
                        <li><a href="#services" className='header-link transition-all duration-300 hover:text-white'>Services</a></li>
                        <li><a href="#projects" className='header-link transition-all duration-300 hover:text-white'>Projects</a></li>

                        <li><a href="#" className='header-button font-fraunces px-6 py-3 bg-white text-neutral-desaturatedBlue 
                            rounded-3xl uppercase text-sm
                            transition-all duration-200
                          hover:text-white hover:bg-opacity-35                        
                        '>Contact</a></li>

                    </ul>
                </nav>

                <button className="hamburgar md:hidden" type='button' onClick={() => setOpenHamburger(!openHamburger)}>
                    <img src={hamburager} alt="Hamburger Icon" />
                </button>
            </div >
        </header >
    )
}

export default Header;